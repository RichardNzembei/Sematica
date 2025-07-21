<template>
  <div class="min-h-screen flex flex-col">
    <NavbarCard />
    <main class="flex-grow min-h-screen">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p>© 2025 Sematica. All rights reserved.</p>
        <div class="mt-2 space-x-4">
          <NuxtLink to="/privacy" class="hover:text-blue-400">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-blue-400">Terms</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-blue-400">Contact</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavbarCard from '~/components/NavbarCard.vue';
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>