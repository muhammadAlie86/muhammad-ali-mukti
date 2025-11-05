<script setup>
definePageMeta({ layout: 'portopolio-layout' })

// Import semua page-mu

import Home from '~/pages/home.vue'
import About from '~/pages/about.vue'
import Skils from '~/pages/skils.vue'
import Experience from '~/pages/experience.vue'
import Project from '~/pages/project/index.vue'
import Contact from '~/pages/contact.vue'
</script>

<template>
  <div>

    <section id="home" class="min-h-screen  bg-gray-950 flex items-center justify-center text-white text-center">
      <Home/>
    </section>

    <section id="about" class="min-h-screen bg-gray-950 text-white">
      <About />
    </section>

    <section id="skills" class="min-h-screen bg-gray-950 text-white">
      <Skils />
    </section>

    <section id="experience" class="min-h-screen bg-gray-950 text-white">
      <Experience />
    </section>

    <section id="project" class="min-h-screen bg-gray-950 text-white">
      <Project />
    </section>

    <section id="contact" class="bg-gray-950 text-white">
      <Contact />
    </section>
  </div>
</template>

