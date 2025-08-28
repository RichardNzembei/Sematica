```vue
<template>
  <section id="demo" class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          See Sematica in Action
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll">
          Watch how businesses transform their customer interactions with our AI-powered platform.
        </p>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="relative bg-white rounded-2xl shadow-large p-8 animate-on-scroll">
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center relative overflow-hidden">
            <button
              @click="playDemo"
              class="w-20 h-20 bg-white rounded-full shadow-large flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
            >
              <UIcon name="heroicons:play" class="w-8 h-8 text-primary-600 group-hover:text-primary-700" aria-hidden="true" />
            </button>
            <div class="absolute inset-0 flex items-center justify-center bg-black/10">
              <div class="text-center text-white">
                <h3 class="text-2xl font-bold mb-2">WhatsApp Voice Commerce Demo</h3>
                <p class="text-lg opacity-90">See how customers order via voice messages</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-3xl font-bold" :class="stat.color">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: '40%', label: 'Faster Processing', color: 'text-primary-600' },
      { value: '85%', label: 'Customer Satisfaction', color: 'text-secondary-600' },
      { value: '60%', label: 'Cost Reduction', color: 'text-accent-600' },
      { value: '24/7', label: 'Availability', color: 'text-primary-600' }
    ]
  }
})

const playDemo = () => {
  console.log('Playing demo video...')
  // Implement video player or navigation logic here
}
</script>
