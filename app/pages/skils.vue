<template>
  <section id="skills" class="bg-gray-900 py-16">
    <div v-scroll-animation>
      <UContainer>

        <div class="text-center mb-12">
          <h2 class="font-extrabold text-3xl uppercase tracking-widest text-sky-400">
            Skills & Technologies
          </h2>
          <div class="flex justify-center items-center mt-3">
            <span class="w-10 h-0.5 bg-white"></span>
            <span class="w-4 h-0.5 mx-1 bg-sky-400"></span>
            <span class="w-10 h-0.5 bg-white"></span>
          </div>
        </div>

        <div class="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
          
          <UCard
            v-for="(skill, index) in skills"
            :key="index"
            :ui="{ 
              
              base: 'transition hover:shadow-sky-500/50 hover:shadow-xl', 
              background: 'bg-gray-800', 
              divide: 'divide-gray-700',
              background: 'bg-gray-800',
              ring: 'ring-1 ring-gray-700',
              body: { padding: 'p-4 sm:p-4 flex-grow' } 
            }"
            class="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div class="h-12 w-full flex items-center justify-center mb-3">
              <UIcon 
                v-if="skill.iconNuxt" 
                :name="skill.iconNuxt" 
                class="text-4xl sm:text-5xl text-sky-400"
              />
              <div v-else class="flex items-center justify-center w-full h-full text-sky-400 font-bold text-sm">
                {{ skill.shortName || skill.name }}
              </div>
            </div>
            
            <p class="mt-2 text-sm font-semibold text-white">{{ skill.name }}</p>

          </UCard>
        </div>
      </UContainer>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Kotlin', iconNuxt: 'i-simple-icons-kotlin' },
  { name: 'Java', iconNuxt: 'i-simple-icons-openjdk' },
  { name: 'MVVM/MVI/MVP', iconNuxt: 'i-simple-icons-android' },
  { name: 'Retrofit', iconNuxt: 'i-simple-icons-square', shortName: 'Networking' }, 
  { name: 'Room Database', iconNuxt: 'i-simple-icons-sqlite', shortName: 'Room' },
  { name: 'Firebase', iconNuxt: 'i-simple-icons-firebase', shortName: 'Firebase' }, 
  { name: 'Gradle', iconNuxt: 'i-simple-icons-gradle' },


  { name: 'Vue.js', iconNuxt: 'i-simple-icons-vuedotjs' },
  { name: 'Javascript', iconNuxt: 'i-simple-icons-javascript' },
  { name: 'Typescript', iconNuxt: 'i-simple-icons-typescript' },
  { name: 'PostgreSQL', iconNuxt: 'i-simple-icons-postgresql' },
  { name: 'TailwindCSS', iconNuxt: 'i-simple-icons-tailwindcss' },
  { name: 'Git', iconNuxt: 'i-simple-icons-git' },
];
</script>