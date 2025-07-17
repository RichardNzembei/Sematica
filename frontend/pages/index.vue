<template>
  <section class="min-h-screen flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-gray-100 py-12">
    <!-- Animated Logo -->
    <img
      src="../assets/img/SEMATICA.png"
      alt="Sematica Logo"
      class="w-60 h-60 mb-6 animate-logo-bounce"
    />

    <h1 class="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 animate-fade-in">Welcome to Sematica</h1>

    <p class="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in" style="animation-delay: 0.2s;">
      Voice + Chat + Commerce AI Platform for Businesses
    </p>

    <NuxtLink to="/onboarding" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 animate-fade-in" style="animation-delay: 0.4s;">
      Get Started
    </NuxtLink>
  </section>
</template>

<script setup>
// No reactive state needed for static home page
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes logoBounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.05);
  }
}

.animate-logo-bounce {
  animation: logoBounce 2s infinite ease-in-out;
}

</style>