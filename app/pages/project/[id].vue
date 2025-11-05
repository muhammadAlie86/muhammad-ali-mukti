<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectsStore } from '@/stores/projects';

const route = useRoute();
const projectsStore = useProjectsStore();

const projectId = parseInt(route.params.id);
const project = computed(() => projectsStore.getProjectById(projectId));
</script>
<template>
  <section class="bg-slate-800 min-h-screen py-12 text-gray-200">
    <div class="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
      
      <div v-if="project" class="flex flex-col items-center gap-8">
       <!--  <div class="w-full">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="rounded-lg shadow-lg w-full h-[300px] object-cover" 
            />
        </div> -->

        <div class="w-full text-center"> <h1 class="text-3xl font-bold text-yellow-400 mb-4">
            {{ project.title }}
          </h1>

          <p class="text-gray-300 mb-6 leading-relaxed">
            {{ project.description }}
          </p>

          <h3 class="text-lg font-semibold text-white mb-2">Tech Stack:</h3>
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <span
              v-for="(tech, i) in project.technologies"
              :key="i"
              class="px-3 py-1 bg-slate-600 text-gray-200 text-sm rounded"
            >
              {{ tech }}
            </span>
          </div>

          <div v-if="project.demoUrl" class="mt-6">
            <a
              :href="project.demoUrl"
              target="_blank"
              class="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
            >
              View Live Demo
            </a>
          </div>
          <div v-else class="mt-6">
            <span class="text-gray-400 italic">
              🔒 Demo tidak tersedia (project internal/kantor)
            </span>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-400 py-20">
        <h2 class="text-2xl font-bold text-red-400 mb-4">Project Not Found</h2>
        <NuxtLink
          to="/project"
          class="inline-block bg-yellow-500 text-slate-900 px-4 py-2 rounded-md hover:bg-yellow-400 text-sm"
        >
          🔙 Back to Projects
        </NuxtLink>
      </div>
    </div>
  </section>
</template>