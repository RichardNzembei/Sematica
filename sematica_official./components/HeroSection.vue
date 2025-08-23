```vue
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950 min-h-screen flex items-center py-8">
    <!-- Animated background elements -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px] opacity-50"></div>
    <div class="absolute w-48 h-48 bg-indigo-950/40 rounded-full blur-2xl top-[10%] left-[5%] animate-[float_6s_ease-in-out_infinite]"></div>
    <div class="absolute w-36 h-36 bg-purple-950/40 rounded-full blur-2xl top-[30%] right-[10%] animate-[float_6s_ease-in-out_infinite_1s]"></div>
    <div class="absolute w-24 h-24 bg-pink-950/40 rounded-full blur-2xl bottom-[20%] left-[20%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
    <div class="absolute w-28 h-28 bg-cyan-950/40 rounded-full blur-2xl bottom-[10%] right-[15%] animate-[float_6s_ease-in-out_infinite_3s]"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
          Automate your business with
          <span class="block bg-gradient-to-r from-amber-200 via-red-200 to-green-200 bg-clip-text text-transparent">AI-driven chat, voice, and commerce</span>
        </h1>
        <p class="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform customer interactions with intelligent automation. WhatsApp integration, M-Pesa payments, and voice commerce - all in one powerful platform.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            :href="$config.public.appUrl + '/signup'"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-900 text-lg font-semibold rounded-full hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_14px_rgba(255,255,255,0.25)]"
          >
            Get Started Free
            <UIcon
              name="heroicons:arrow-right"
              class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
          <button
            @click="scrollToDemo"
            class="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
          >
            Watch Demo
            <UIcon
              name="heroicons:play-circle"
              class="w-5 h-5 ml-2 group-hover:scale-110 transition-transform"
              aria-hidden="true"
            />
          </button>
        </div>
        <div>
          <p class="text-sm text-gray-300 mb-6">Trusted by 500+ businesses in Kenya</p>
          <div class="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
            <div
              v-for="logo in logos"
              :key="logo"
              class="text-gray-200 font-semibold text-sm px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              {{ logo }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = ['TechCorp', 'GrowthCo', 'InnovateKE', 'SmartBiz']

const scrollToDemo = () => {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}
</style>
```