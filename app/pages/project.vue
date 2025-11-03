<template>
  <div id="projects" class="bg-gray-900 py-8">
    <div v-scroll-animation>
      <UContainer>
        
        <div class="text-center">
          <h2
            class="font-extrabold text-3xl uppercase tracking-widest text-cyan-400"
          >
            Projects
          </h2>
          <div class="flex justify-center items-center mt-3 mb-12">
            <span class="w-10 h-0.5 bg-white"></span>
            <span class="w-4 h-0.5 mx-1 bg-cyan-400"></span>
            <span class="w-10 h-0.5 bg-white"></span>
          </div>
        </div>

        <div v-if="loading" class="text-center">
          <UProgress animation="carousel" color="cyan" size="lg" />
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
            :to="'/project/' + project.id"
            :style="{ transitionDelay: index * 100 + 'ms' }"
            class="block transform hover:-translate-y-2 transition-transform duration-300"   >
            <UCard
            
              :ui="{ 
               
              base: 'transition hover:shadow-cyan-500/50 hover:shadow-xl', 
              background: 'bg-gray-800', 
              divide: 'divide-gray-700' ,
                body: { padding: 'p-6 flex-grow' },
                footer: { padding: 'p-6 pt-0' }
              }"
            >
              <template #header>
                <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover rounded-t-lg" loading="lazy">
              </template>

              <h2 class="text-2xl font-bold mb-2 text-cyan-400">{{ project.name }}</h2>
              <p class="text-gray-400 mb-4 min-h-[60px]">{{ project.description }}</p>

              <template #footer>
                <h3 class="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h3>
                <div class="flex flex-wrap gap-2">
                  <UBadge 
                    v-for="tech in formatTechnologies(project.technologies)" 
                    :key="tech" 
                    color="cyan" 
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
import { ref } from 'vue';

const projects = ref([
  // ... data Anda ...
  {
    id: 1,
    name: 'Project A',
    description: 'This is a description for Project A. It showcases some amazing features and technologies.',
    technologies: 'Vue.js, Nuxt.js, Tailwind CSS',
    image: 'https://picsum.photos/seed/project-a/600/400',
  },
  {
    id: 2,
    name: 'Project B',
    description: 'Project B is an exciting application built with modern web technologies.',
    technologies: 'React, Node.js, MongoDB',
    image: 'https://picsum.photos/seed/project-b/600/400',
  },
  {
    id: 3,
    name: 'Project C',
    description: 'A personal portfolio website to showcase my skills and projects.',
    technologies: 'Vue.js, Nuxt.js, TypeScript',
    image: 'https://picsum.photos/seed/project-c/600/400',
  },
]);

const loading = ref(false);
const error = ref(null);

// Fungsi untuk mengubah string comma-separated menjadi array
const formatTechnologies = (techString) => {
  if (!techString) return [];
  return techString.split(',').map(tech => tech.trim());
};
</script>