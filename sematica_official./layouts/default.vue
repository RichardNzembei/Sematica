<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        @click="closeMobileMenu"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, provide, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// Mobile menu state
const mobileMenuOpen = ref(false)

// Provide mobile menu state to child components
provide('mobileMenuOpen', mobileMenuOpen)

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Handle escape key
onMounted(() => {
  if (import.meta.client) {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        mobileMenuOpen.value = false
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscape)
    })
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>