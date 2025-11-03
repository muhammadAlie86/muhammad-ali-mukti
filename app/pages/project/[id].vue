<template>
  <section class="bg-gray-900 min-h-screen py-16 text-gray-200">
    
    <UContainer>
      
      <div v-if="loading" class="text-center">
        <UProgress animation="carousel" color="cyan" size="lg" />
        <p class="text-gray-400 mt-4">Loading project details...</p>
      </div>

      <UAlert
        v-else-if="error"
        icon="i-heroicons-exclamation-triangle-solid"
        color="red"
        variant="solid"
        :title="error"
        description="There was an error fetching the project details."
        class="mb-8"
      />

      <div v-else-if="project" class="flex flex-col gap-8 items-center max-w-4xl mx-auto">
        
        <div class="w-full">
          <UCard :ui="{ background: 'bg-gray-800' }">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full object-cover rounded-lg"
              loading="lazy"
            />
          </UCard>
        </div>

        <div class="w-full">
          <h1 class="text-4xl font-extrabold text-cyan-400 mb-4 text-center">
            {{ project.name }}
          </h1>
          
          <p class="text-gray-400 mb-8 leading-relaxed text-lg text-center">
            {{ project.description }}
          </p>

          <h3 class="text-lg font-semibold text-white mb-3 text-center">Tech Stack:</h3>
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <UBadge
              v-for="(tech, i) in project.technologies.split(',')"
              :key="i"
              color="cyan"
              variant="subtle"
              size="md"
            >
              {{ tech.trim() }}
            </UBadge>
          </div>

          <div v-if="project.demoUrl" class="text-center">
            <UButton
              :to="project.demoUrl"
              target="_blank"
              label="View Live Demo"
              icon="i-heroicons-globe-alt-solid"
              color="cyan"
              variant="solid"
              size="xl"
            />
          </div>
          <div v-else class="text-center">
            <span class="text-gray-400 italic text-base">
              🔒 Demo tidak tersedia (project internal/kantor)
            </span>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-400 mt-20">
        <UAlert
          icon="i-heroicons-magnifying-glass-circle-solid"
          color="red"
          variant="subtle"
          title="Project Not Found"
          description="The project you are looking for does not exist or the ID is incorrect."
          class="max-w-md mx-auto mb-8"
        />
        
        <UButton
          to="/projects"
          label="🔙 Back to Projects"
          color="white"
          size="lg"
        />
      </div>
      
    </UContainer>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
// useRoute di-auto-import oleh Nuxt 3

const route = useRoute(); 
// Mengambil ID dari route params, dipastikan diubah ke integer
const projectId = computed(() => parseInt(route.params.id));

// Data Mock Proyek
const projects = ref([
  {
    id: 1,
    name: 'Project A: Payment System Integration',
    description: 'A comprehensive mobile application developed for secure and real-time payment processing, integrating various EDC devices and PPOB functionalities. Built with a focus on high reliability and production SLA compliance.',
    technologies: 'Kotlin, Jetpack Compose, MQTT, Retrofit, Hilt',
    image: 'https://picsum.photos/seed/project-a/1000/600',
    demoUrl: 'https://github.com/muhammadalie86/project-a'
  },
  {
    id: 2,
    name: 'Project B: E-Commerce Backend API',
    description: 'Developed a robust and scalable RESTful API service to handle user authentication, product catalog, and order processing for an e-commerce platform.',
    technologies: 'Node.js, Express, MongoDB, TypeScript',
    image: 'https://picsum.photos/seed/project-b/1000/600',
    demoUrl: null // Tidak ada demo publik
  },
  {
    id: 3,
    name: 'Project C: Personal Portfolio Website',
    description: 'This is the very website you are viewing now! Built as a modern, fast, and responsive portfolio to showcase my work experience, skills, and projects.',
    technologies: 'Vue.js, Nuxt.js, TypeScript, Nuxt UI, Tailwind CSS',
    image: 'https://picsum.photos/seed/project-c/1000/600',
    demoUrl: 'https://example.com/project-c'
  },
]);

const project = computed(() => projects.value.find(p => p.id === projectId.value));

const loading = ref(false); 
const error = ref(null); 
</script>