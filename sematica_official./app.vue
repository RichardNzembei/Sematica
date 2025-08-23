<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Global Components -->
    <ChatWidget />
    <CookieConsent />
    
    <!-- Loading Indicator -->
    <div v-if="pending" class="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="flex items-center space-x-3">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
        <span class="text-gray-600 font-medium">Loading...</span>
      </div>
    </div>
    
    <!-- Back to Top Button -->
    <transition name="fade">
      <button
        v-if="showBackToTop"
        class="fixed bottom-6 right-6 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
        @click="scrollToTop"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// Meta configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

// Global state
const pending = ref(false)
const showBackToTop = ref(false)

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Handle scroll events
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

// Intersection Observer for animations
let observer = null

const initAnimations = () => {
  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))
  }
}

// Lifecycle hooks
onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', handleScroll)
    
    // Initialize animations with a delay to ensure DOM is ready
    nextTick(() => {
      setTimeout(initAnimations, 100)
    })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    if (observer) {
      observer.disconnect()
    }
  }
})

// Error handling
onErrorCaptured((error, instance, info) => {
  console.error('Global error:', error, info)
  return false
})
</script>

<style>
/* Transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Loading animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth focus styles */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid theme('colors.primary.500');
  outline-offset: 2px;
}
</style>