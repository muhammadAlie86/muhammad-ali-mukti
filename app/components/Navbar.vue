<template>
  <header class="w-full sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <UContainer class="flex items-center justify-between py-4">
      <!-- 🔹 Logo + Nama -->
      <div class="flex items-center cursor-pointer select-none" @click="scrollToSection('#home')">
        <span class="text-2xl font-extrabold tracking-wide text-sky-400">
          My <span class="text-white">Portfolio</span>
        </span>
      </div>

      <!-- 🔹 Navigation -->
      <nav class="flex space-x-4 sm:space-x-6 md:space-x-8">
        <UButton
          v-for="item in navItems"
          :key="item.to"
          @click="scrollToSection(item.to)"
          :label="item.label"
          variant="ghost"
          color="sky"
          :padded="false"
          class="!text-gray-300 hover:!text-sky-400 transition-all duration-200 cursor-pointer text-base font-medium"
        />
      </nav>
    </UContainer>
  </header>
</template>

<script setup>
import logo from 'assets/images/ic_logo_programmer_santai.png'

const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'About Me', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Experience', to: '#experience' },
  { label: 'Project', to: '#project' },
  { label: 'Contact Me', to: '#contact' },
]

// Fungsi scroll halus ke section
const scrollToSection = (hash) => {
  const el = document.querySelector(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
