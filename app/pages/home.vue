<template>
  <section
    id="home"
    class="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-gray-100"
  >
    <div class="w-full max-w-5xl px-6 sm:px-10 lg:px-16 text-center space-y-6">
      <!-- ✨ Heading -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        I'm <span class="text-sky-400">Muhammad Ali Mukti</span>
      </h1>

      <!-- 💻 Subtitle -->
      <p class="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
        Software Engineer
      </p>

      <!-- 🧠 Description -->
      <p class="text-gray-400 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto">
        A passionate Software Engineer specializing in <span class="text-sky-300">payment systems</span>, 
        <span class="text-sky-300">POS solutions</span>, and <span class="text-sky-300">hardware integration</span>.
        Experienced in <span class="text-sky-300">Web & Android development</span> — creating production-grade applications 
        that meet strict SLA standards.
      </p>

      <!-- 📩 CTA -->
      <div class="pt-6">
        <UButton
          label="Contact Me"
          color="sky"
          variant="solid"
          size="lg"
          :to="'#contact'"
          @click.prevent="$emit('scrollToSection', '#contact')"
          class="shadow-lg hover:shadow-sky-500/40 transition-all transform hover:-translate-y-1 font-semibold tracking-wide"
        />
      </div>
    </div>
  </section>
</template>
