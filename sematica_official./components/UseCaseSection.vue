```vue
<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Perfect for Every Industry
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
          From restaurants to e-commerce, see how Sematica transforms businesses across Kenya.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(useCase, index) in useCases"
          :key="index"
          class="group cursor-pointer animate-on-scroll"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          @click="selectUseCase(index)"
        >
          <div class="card card-hover overflow-hidden">
            <div class="aspect-video bg-gradient-to-br" :class="useCase.gradient">
              <div class="p-6 h-full flex flex-col justify-between">
                <div>
                  <UIcon :name="useCase.icon" class="w-10 h-10 text-white mb-4" aria-hidden="true" />
                  <h3 class="text-2xl font-bold text-white mb-2">{{ useCase.title }}</h3>
                  <p class="text-white/90">{{ useCase.description }}</p>
                </div>
                <div class="text-right">
                  <UIcon
                    name="heroicons:arrow-right"
                    class="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-gray-500">Success Story</span>
                <span class="text-sm font-bold text-secondary-600">{{ useCase.improvement }}</span>
              </div>
              <ul class="space-y-2">
                <li v-for="feature in useCase.features" :key="feature" class="flex items-start text-sm text-gray-600">
                  <UIcon
                    name="heroicons:check"
                    class="w-4 h-4 text-secondary-500 mr-2 mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12 animate-on-scroll">
        <NuxtLink to="/templates" class="btn btn-primary btn-xl">
          Explore All Templates
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  useCases: {
    type: Array,
    default: () => [
      {
        title: 'Restaurants',
        description: 'Voice ordering, menu management, delivery coordination',
        features: ['Voice menu reading', 'Order processing', 'Delivery tracking', 'Customer feedback'],
        improvement: '+40% orders',
        gradient: 'from-orange-500 to-red-500',
        icon: 'heroicons:sparkles'
      },
      {
        title: 'E-commerce',
        description: 'Product catalogs, order management, customer support',
        features: ['Product browsing', 'Cart management', 'Payment processing', 'Order status'],
        improvement: '+60% conversion',
        gradient: 'from-blue-500 to-purple-500',
        icon: 'heroicons:shopping-cart'
      },
      {
        title: 'Healthcare',
        description: 'Appointment booking, patient reminders, consultations',
        features: ['Appointment scheduling', 'Reminder system', 'Medical history', 'Prescription tracking'],
        improvement: '+35% efficiency',
        gradient: 'from-green-500 to-teal-500',
        icon: 'heroicons:heart'
      },
      {
        title: 'Logistics',
        description: 'Package tracking, delivery updates, route optimization',
        features: ['Real-time tracking', 'Delivery notifications', 'Route planning', 'Customer updates'],
        improvement: '+50% satisfaction',
        gradient: 'from-indigo-500 to-blue-500',
        icon: 'heroicons:truck'
      },
      {
        title: 'Education',
        description: 'Student enrollment, class schedules, fee management',
        features: ['Course registration', 'Schedule management', 'Fee collection', 'Progress tracking'],
        improvement: '+45% engagement',
        gradient: 'from-yellow-500 to-orange-500',
        icon: 'heroicons:academic-cap'
      },
      {
        title: 'Professional Services',
        description: 'Client booking, project management, billing',
        features: ['Client onboarding', 'Project tracking', 'Time logging', 'Invoice generation'],
        improvement: '+30% productivity',
        gradient: 'from-purple-500 to-pink-500',
        icon: 'heroicons:briefcase'
      }
    ]
  }
})

const selectUseCase = (index) => {
  navigateTo(`/templates?category=${useCases[index].title.toLowerCase()}`)
}
</script>
```