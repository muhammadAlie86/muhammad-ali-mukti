<template>
  <section
    id="contact"
    class="bg-gray-900 py-16 flex flex-col justify-center items-center min-h-[50vh]"
  >
    <UContainer class="text-center">
      <h2 class="font-extrabold text-3xl uppercase tracking-widest text-sky-400">
        Contact Me
      </h2>

      <div class="flex justify-center items-center mt-3 mb-8">
        <span class="w-10 h-0.5 bg-white"></span>
        <span class="w-4 h-0.5 mx-1 bg-sky-400"></span>
        <span class="w-10 h-0.5 bg-white"></span>
      </div>

      <p class="text-gray-400 text-lg mb-8">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

      <div class="flex justify-center gap-4 sm:gap-6 flex-wrap">
        <UButton
          v-for="(contact, index) in contacts"
          :key="index"
          :to="contact.url"
          :label="contact.name"
          target="_blank"
          color="white"
          variant="soft"
          size="lg"
          :icon="contact.icon"
          class="hover:bg-sky-400 hover:text-black transition"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const contacts = [
  { name: 'Email', url: 'mailto:aliemuhammad847@gmail.com', icon: 'i-simple-icons-gmail' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ali-mukti', icon: 'i-simple-icons-linkedin' },
  { name: 'GitHub', url: 'https://github.com/muhammadalie86', icon: 'i-simple-icons-github' },
  { name: 'Instagram', url: 'https://instagram.com/username', icon: 'i-simple-icons-instagram' },
]
</script>
