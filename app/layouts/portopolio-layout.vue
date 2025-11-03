<template>
  <!-- Full width & height layout -->
  <div class="w-full min-h-screen flex flex-col bg-slate-900 text-gray-100 overflow-x-hidden">
    
    <!-- 🔹 Navbar tetap di atas -->
    <Navbar class="flex-shrink-0" />
    
    <!-- 🔹 Main content isi halaman (expand penuh secara vertikal) -->
    <main>
      <NuxtPage />
    </main>
    
    <!-- 🔹 Footer tetap di bawah -->
    <Footer class="flex-shrink-0" />
    
  </div>
</template>
