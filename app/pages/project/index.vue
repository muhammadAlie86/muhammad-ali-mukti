<template>
  <div id="projects" class="bg-gray-900 py-8">
    <div v-scroll-animation>
      <UContainer>
        
        <div class="text-center">
          <h2
            class="font-extrabold text-3xl uppercase tracking-widest text-sky-400"
          >
            Projects
          </h2>
          <div class="flex justify-center items-center mt-3 mb-12">
            <span class="w-10 h-0.5 bg-white"></span>
            <span class="w-4 h-0.5 mx-1 bg-sky-400"></span>
            <span class="w-10 h-0.5 bg-white"></span>
          </div>
        </div>

        <div v-if="loading" class="text-center">
          <UProgress animation="carousel" color="sky" size="lg" />
          <p class="text-gray-400 mt-4">Loading projects...</p>
        </div>

        <UAlert
          v-if="error"
          icon="i-heroicons-exclamation-triangle-solid"
          color="red"
          variant="solid"
          :title="error"
          description="There was an error fetching the projects data."
          class="mb-8"
        />

        <transition-group 
          v-if="projects.length" 
          tag="div" 
          name="list-item"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <NuxtLink 
            v-for="(project, index) in projects" 
            :key="project.id" 
            :to="`/project/${project.id}`"
            :style="{ transitionDelay: index * 100 + 'ms' }"
            class="block transform hover:-translate-y-2 transition-transform duration-300"   >
            <UCard
            
              :ui="{ 
               
              base: 'transition hover:shadow-sky-500/50 hover:shadow-xl', 
              background: 'bg-gray-800', 
              divide: 'divide-gray-700' ,
                body: { padding: 'p-6 flex-grow' },
                footer: { padding: 'p-6 pt-0' }
              }"
            >
              <template #header>
                <img :src="project.image" :alt="project.name" 
            class="rounded-lg shadow-lg w-full h-auto object-contain" loading="lazy"/>
              </template>

              <h2 class="text-2xl font-bold mb-2 text-sky-400">{{ project.name }}</h2>
              <p class="text-gray-400 mb-4 min-h-[60px]">{{ project.description }}</p>

              <template #footer>
                <h3 class="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h3>
                <div class="flex flex-wrap gap-2">
                  <UBadge 
                    v-for="tech in project.technologies" 
                    :key="tech" 
                    color="sky" 
                    variant="subtle" 
                    size="sm"
                  >
                    {{ tech }}
                  </UBadge>
                </div>
              </template>
            </UCard>
          </NuxtLink>
        </transition-group>
        
      </UContainer>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProjectsStore } from '@/stores/projects';

const projectsStore = useProjectsStore();
const projects = computed(() => projectsStore.projects);
</script>