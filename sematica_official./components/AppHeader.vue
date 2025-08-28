<!-- components/AppHeader.vue -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2 group">
                  <img
          src="../assets/img/SEMATICA.png"
          alt="Sematica Icon"
          class="w-10 h-10 object-contain"
        />

          <span class="text-xl lg:text-2xl font-display font-bold text-gray-900">Sematica</span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <div class="flex items-center space-x-6">
            <!-- Products Dropdown -->
            <div class="relative group">
              <button class="nav-link flex items-center space-x-1">
                <span>Products</span>
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute top-full left-0 w-64 bg-white rounded-lg shadow-large border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                <div class="p-2">
                  <NuxtLink to="/voice-commerce" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Voice Commerce</p>
                      <p class="text-sm text-gray-500">AI-powered voice interactions</p>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink to="/crm" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-shrink-0 w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">CRM</p>
                      <p class="text-sm text-gray-500">Customer relationship management</p>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink to="/invoicing" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Invoicing</p>
                      <p class="text-sm text-gray-500">Automated billing and invoices</p>
                    </div>
                  </NuxtLink>
                  
                  <NuxtLink to="/payments" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">Payments</p>
                      <p class="text-sm text-gray-500">M-Pesa & card processing</p>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            
            <!-- Regular Navigation Links -->
            <NuxtLink to="/pricing" class="nav-link">Pricing</NuxtLink>
            <NuxtLink to="/templates" class="nav-link">Templates</NuxtLink>
            <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
            
            <!-- Resources Dropdown -->
            <div class="relative group">
              <button class="nav-link flex items-center space-x-1">
                <span>Resources</span>
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div class="absolute top-full left-0 w-48 bg-white rounded-lg shadow-large border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                <div class="p-2">
                  <NuxtLink to="/docs" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">Documentation</NuxtLink>
                  <NuxtLink to="/about" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">About</NuxtLink>
                  <NuxtLink to="/support" class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">Support</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex items-center space-x-3">
            <a
              :href="$config.public.appUrl + '/login'"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost"
            >
              Login
            </a>
            <a
              :href="$config.public.appUrl + '/signup'"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              Get Started
            </a>
          </div>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-b border-gray-200">
        <div class="container-custom py-4">
          <div class="space-y-4">
            <!-- Mobile Products -->
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Products</p>
              <div class="space-y-2 ml-4">
                <NuxtLink to="/voice-commerce" class="block text-gray-700 hover:text-primary-600 transition-colors">Voice Commerce</NuxtLink>
                <NuxtLink to="/crm" class="block text-gray-700 hover:text-primary-600 transition-colors">CRM</NuxtLink>
                <NuxtLink to="/invoicing" class="block text-gray-700 hover:text-primary-600 transition-colors">Invoicing</NuxtLink>
                <NuxtLink to="/payments" class="block text-gray-700 hover:text-primary-600 transition-colors">Payments</NuxtLink>
              </div>
            </div>
            
            <!-- Mobile Navigation -->
            <div class="space-y-2">
              <NuxtLink to="/pricing" class="block text-gray-700 hover:text-primary-600 transition-colors">Pricing</NuxtLink>
              <NuxtLink to="/templates" class="block text-gray-700 hover:text-primary-600 transition-colors">Templates</NuxtLink>
              <NuxtLink to="/blog" class="block text-gray-700 hover:text-primary-600 transition-colors">Blog</NuxtLink>
            </div>
            
            <!-- Mobile Resources -->
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Resources</p>
              <div class="space-y-2 ml-4">
                <NuxtLink to="/docs" class="block text-gray-700 hover:text-primary-600 transition-colors">Documentation</NuxtLink>
                <NuxtLink to="/about" class="block text-gray-700 hover:text-primary-600 transition-colors">About</NuxtLink>
                <NuxtLink to="/support" class="block text-gray-700 hover:text-primary-600 transition-colors">Support</NuxtLink>
              </div>
            </div>
            
            <!-- Mobile CTA -->
            <div class="pt-4 space-y-3">
              <a
                :href="$config.public.appUrl + '/login'"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center btn btn-ghost"
              >
                Login
              </a>
              <a
                :href="$config.public.appUrl + '/signup'"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full text-center btn btn-primary"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
// Mobile menu state
const mobileMenuOpen = inject('mobileMenuOpen')

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* Ensure dropdowns work properly */
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:visible {
  visibility: visible;
}
</style>