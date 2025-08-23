```vue
<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          {{ title }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
          {{ description }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="card card-hover p-8 text-center animate-on-scroll"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div
            class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            :class="feature.iconBg"
          >
            <UIcon :name="feature.icon" :class="feature.iconColor" class="w-8 h-8" aria-hidden="true" />
          </div>
          <h3 class="text-2xl font-display font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
          <p class="text-gray-600 mb-6">{{ feature.description }}</p>
          <ul class="space-y-2 text-sm text-gray-500 mb-6">
            <li v-for="benefit in feature.benefits" :key="benefit" class="flex items-center justify-center">
              <UIcon
                name="heroicons:check"
                class="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              {{ benefit }}
            </li>
          </ul>
          <NuxtLink :to="feature.link" class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group">
            Learn more
            <UIcon
              name="heroicons:arrow-right"
              class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Everything you need to automate your business' },
  description: { type: String, default: 'Our comprehensive platform combines AI chat, voice commerce, CRM, and payment processing in one seamless solution.' },
  features: {
    type: Array,
    default: () => [
      {
        title: 'Voice Commerce',
        description: 'Transform voice messages into sales with AI-powered natural language processing',
        benefits: ['Multi-language support', 'Real-time voice processing', 'Automated order taking'],
        icon: 'heroicons:microphone',
        iconBg: 'bg-primary-100',
        iconColor: 'text-primary-600',
        link: '/voice-commerce'
      },
      {
        title: 'Smart CRM',
        description: 'Manage customer relationships with intelligent automation and insights',
        benefits: ['Contact management', 'Interaction history', 'Automated follow-ups'],
        icon: 'heroicons:user-group',
        iconBg: 'bg-secondary-100',
        iconColor: 'text-secondary-600',
        link: '/crm'
      },
      {
        title: 'Integrated Payments',
        description: 'Accept payments seamlessly through M-Pesa, cards, and mobile money',
        benefits: ['M-Pesa integration', 'Card processing', 'Instant notifications'],
        icon: 'heroicons:credit-card',
        iconBg: 'bg-accent-100',
        iconColor: 'text-accent-600',
        link: '/payments'
      }
    ]
  }
})
</script>
```