<template>
  <section id="about" class="bg-gray-900 py-16">
    
    <div class="text-center mb-12">
      <h2 class="font-extrabold text-3xl uppercase tracking-widest text-cyan-400">
        About Me
      </h2>
      <div class="flex justify-center items-center mt-3">
        <span class="w-10 h-0.5 bg-white"></span>
        <span class="w-4 h-0.5 mx-1 bg-cyan-400"></span>
        <span class="w-10 h-0.5 bg-white"></span>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <UCard 
         :ui="{ 
              base: 'transition hover:shadow-cyan-500/50 hover:shadow-xl', 
              background: 'bg-gray-800', 
              divide: 'divide-gray-700' 
            }"
            class="w-full bg-gray-800 border border-cyan-400/30 shadow-2xl">
            
            <div class="flex flex-col md:flex-row items-center md:items-start gap-12">
                
                <div class="w-full"> 
                    <h3 class="text-3xl text-white font-bold mb-6">I'm Muhammad Alie</h3>
                    
                    <p class="text-gray-300 leading-relaxed text-lg mb-4">
                        I am a 
                        <span class="font-bold text-cyan-400">Software Engineer</span>
                    </p>
                    
                   <p class="text-gray-400 leading-relaxed mb-4">
                    As a passionate Software Engineer, I've dedicated my career to building innovative and reliable technology solutions. I'm deeply committed to developing payment systems and POS solutions, driven by the belief that technology should simplify complex transactions and improve business efficiency. This philosophy serves as the foundation for every project I handle, from initial concept to final implementation.
                  </p>
                  <p class="text-gray-400 leading-relaxed mb-4">
                    My expertise covers a broad spectrum, from software integration to hardware integration. I have extensive experience in connecting physical devices like card readers and printers into a digital ecosystem, ensuring every component works in harmony. My focus is not just on functionality, but also on stability and security—crucial elements in the ever-evolving world of digital payments.
                  </p>
                  <p class="text-gray-400 leading-relaxed mb-4">
                    I've mastered the technologies and methodologies required to build responsive, high-performance applications for both desktop and mobile users. Every line of code I write is aimed at creating a smooth, intuitive user experience without compromising data security.
                  </p>
                  <p class="text-gray-400 leading-relaxed mb-4">
                    My greatest commitment is to quality, which is proven by my ability to create applications that meet stringent production SLA (Service Level Agreement) standards. I don't just build products that work; I ensure they are reliable, scalable, and ready for the most demanding operational environments. In short, I am a dedicated problem-solver focused on delivering solutions that are well-tested and production-ready.
                  </p>
                    
                    <div class="mt-8">
                        <UButton size="lg" color="cyan" variant="solid" label="Download Resume" icon="i-heroicons-arrow-down-tray-solid" />
                    </div>
                    
                </div>
            </div>
        </UCard>
    </div>
  </section>
</template>
