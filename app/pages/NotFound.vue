<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900 text-center px-6">
    
    <div>
      <h1 class="text-9xl font-extrabold text-sky-400">404</h1>
      
      <p class="text-3xl md:text-4xl font-semibold text-white mt-4">
        Page Not Found
      </p>
      
      <p class="text-gray-400 mt-2 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      
      <div class="mt-8">
        <UButton 
          to="/" 
          size="xl"
          color="sky"
          variant="solid"
          label="Go Back Home"
          icon="i-heroicons-arrow-left-start-on-rectangle-solid"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Jika ini adalah file error.vue, Anda akan menerima properti error dari Nuxt
// defineProps(['error']);

// Atau jika Anda menggunakan tombol, Anda bisa menambahkan fungsi clearError() jika perlu:
/*
const handleError = () => {
  clearError({ redirect: '/' })
}
*/
</script>