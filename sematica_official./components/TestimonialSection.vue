```vue
<template>
  <section class="section bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Loved by Businesses Across Kenya
        </h2>
        <p class="text-xl text-gray-600 animate-on-scroll">
          See what our customers have to say about their experience.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="card p-8 animate-on-scroll"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div class="flex items-center mb-6">
            <div class="flex text-yellow-400">
              <UIcon v-for="n in 5" :key="n" name="heroicons:star" class="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
          <blockquote class="text-gray-700 mb-6 text-lg">{{ testimonial.content }}</blockquote>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-bold text-lg">{{ testimonial.author.charAt(0) }}</span>
            </div>
            <div>
              <div class="font-bold text-gray-900">{{ testimonial.author }}</div>
              <div class="text-gray-500 text-sm">{{ testimonial.role }} • {{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  testimonials: {
    type: Array,
    default: () => [
      {
        content: 'Sematica transformed our restaurant operations. Customers love ordering through WhatsApp voice messages, and we\'ve seen a 40% increase in orders.',
        author: 'Sarah Kimani',
        role: 'Owner',
        company: 'Kimani\'s Kitchen'
      },
      {
        content: 'The M-Pesa integration is seamless. Our customers can pay instantly, and we get real-time notifications. It\'s revolutionized our e-commerce business.',
        author: 'John Mwangi',
        role: 'CEO',
        company: 'AfriTech Solutions'
      },
      {
        content: 'Setting up took less than 10 minutes. The AI understands our customers\' needs and provides accurate responses. Customer satisfaction is at an all-time high.',
        author: 'Grace Wanjiku',
        role: 'Operations Manager',
        company: 'HealthCare Plus'
      }
    ]
  }
})
</script>
```