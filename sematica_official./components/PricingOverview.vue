```vue
<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Simple, Transparent Pricing
        </h2>
        <p class="text-xl text-gray-600 animate-on-scroll">
          Start free, scale as you grow. No hidden fees, no surprises.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="card relative overflow-hidden animate-on-scroll"
          :class="[plan.popular ? 'border-2 border-primary-500 card-glow scale-105' : 'border border-gray-200']"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        >
          <div v-if="plan.popular" class="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
            Most Popular
          </div>
          <div class="p-8" :class="plan.popular ? 'pt-16' : ''">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
                <span v-if="plan.period" class="text-gray-500">{{ plan.period }}</span>
              </div>
              <p class="text-gray-600">{{ plan.description }}</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-start">
                <UIcon
                  name="heroicons:check"
                  class="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            <a
              :href="$config.public.appUrl + (plan.name === 'Enterprise' ? '/contact' : '/signup')"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full btn"
              :class="plan.popular ? 'btn-primary' : 'btn-outline'"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
      <div class="text-center mt-12 animate-on-scroll">
        <NuxtLink to="/pricing" class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group">
          See detailed pricing comparison
          <UIcon
            name="heroicons:arrow-right"
            class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  plans: {
    type: Array,
    default: () => [
      {
        name: 'Starter',
        price: 'Free',
        period: '',
        description: 'Perfect for small businesses getting started',
        features: [
          'Up to 100 conversations/month',
          'Basic WhatsApp integration',
          'Simple payment processing',
          'Email support',
          'Basic analytics'
        ],
        cta: 'Get Started',
        popular: false
      },
      {
        name: 'Professional',
        price: 'KSh 5,000',
        period: '/month',
        description: 'Ideal for growing businesses',
        features: [
          'Unlimited conversations',
          'Voice commerce',
          'Advanced CRM',
          'M-Pesa integration',
          'Priority support',
          'Custom branding',
          'Advanced analytics'
        ],
        cta: 'Start Free Trial',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with specific needs',
        features: [
          'Everything in Professional',
          'Custom integrations',
          'Dedicated account manager',
          'SLA guarantee',
          'On-premise deployment',
          'Advanced security',
          'Custom training'
        ],
        cta: 'Contact Sales',
        popular: false
      }
    ]
  }
})
</script>
```