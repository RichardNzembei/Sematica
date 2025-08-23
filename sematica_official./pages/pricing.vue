<template>
  <div>
    <section class="section bg-gradient-primary pt-24">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Simple, transparent 
          <span class="text-gradient">pricing</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Choose the plan that fits your business needs. Start free, upgrade as you grow. No hidden fees, cancel anytime.
        </p>
        
        <!-- Billing Toggle -->
        <div class="flex items-center justify-center mb-12 animate-on-scroll">
          <span class="text-gray-600 mr-3">Monthly</span>
          <button
            @click="toggleBilling"
            aria-label="Toggle between monthly and yearly billing"
            class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            :class="isYearly ? 'bg-primary-600' : 'bg-gray-300'"
          >
            <span
              class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
              :class="isYearly ? 'translate-x-6' : 'translate-x-1'"
            />
          </button>
          <span class="text-gray-600 ml-3">Yearly</span>
          <span class="ml-2 text-sm bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full font-medium">
            Save 20%
          </span>
        </div>
      </div>
    </section>
    
    <!-- Pricing Plans -->
    <section class="section bg-white -mt-8">
      <div class="container-custom">
        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(plan, index) in pricingPlans"
            :key="plan.name"
            class="relative animate-on-scroll"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <!-- Popular Badge -->
            <div
              v-if="plan.popular"
              class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
            >
              <span class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Most Popular
              </span>
            </div>
            
            <div
              class="card h-full p-8 relative overflow-hidden"
              :class="[
                plan.popular 
                  ? 'border-2 border-primary-500 shadow-glow scale-105' 
                  : 'border border-gray-200'
              ]"
            >
              <!-- Background Decoration -->
              <div
                v-if="plan.popular"
                class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full"
              />
              
              <div class="relative z-10">
                <!-- Plan Header -->
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-display font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
                  <div class="mb-4">
                    <span class="text-5xl font-bold text-gray-900">
                      {{ isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price }}
                    </span>
                    <span v-if="plan.period" class="text-gray-500 text-lg">
                      {{ isYearly ? '/year' : plan.period }}
                    </span>
                  </div>
                  <p class="text-gray-600">{{ plan.description }}</p>
                  
                  <!-- Savings Badge for Yearly -->
                  <div
                    v-if="isYearly && plan.savings"
                    class="mt-2 text-sm text-secondary-600 font-medium"
                  >
                    Save {{ plan.savings }} per year
                  </div>
                </div>
                
                <!-- Features List -->
                <ul class="space-y-4 mb-8">
                  <li
                    v-for="feature in plan.features"
                    :key="feature.name"
                    class="flex items-start"
                  >
                    <UIcon
                      :name="feature.included ? 'heroicons:check' : 'heroicons:x-mark'"
                      class="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                      :class="feature.included ? 'text-secondary-500' : 'text-gray-300'"
                      aria-hidden="true"
                    />
                    <div>
                      <span
                        class="text-gray-700"
                        :class="{ 'line-through text-gray-400': !feature.included }"
                      >
                        {{ feature.name }}
                      </span>
                      <div
                        v-if="feature.limit"
                        class="text-sm text-gray-500"
                      >
                        {{ feature.limit }}
                      </div>
                    </div>
                  </li>
                </ul>
                
                <!-- CTA Button -->
                <a
                  :href="$config.public.appUrl + (plan.name === 'Enterprise' ? '/contact' : '/signup?plan=' + plan.name.toLowerCase())"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full btn btn-lg"
                  :class="plan.popular ? 'btn-primary' : 'btn-outline'"
                >
                  {{ plan.cta }}
                </a>
                
                <!-- Additional Info -->
                <div class="mt-4 text-center text-sm text-gray-500">
                  {{ plan.additionalInfo }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Feature Comparison -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
            Compare all features
          </h2>
          <p class="text-xl text-gray-600 animate-on-scroll">
            See exactly what's included in each plan
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-soft overflow-hidden animate-on-scroll">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Features
                  </th>
                  <th
                    v-for="plan in pricingPlans"
                    :key="plan.name"
                    class="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider"
                    :class="plan.popular ? 'text-primary-600' : 'text-gray-500'"
                  >
                    {{ plan.name }}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="(feature, index) in comparisonFeatures"
                  :key="feature.name"
                  :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                >
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">
                    {{ feature.name }}
                    <div v-if="feature.description" class="text-xs text-gray-500 mt-1">
                      {{ feature.description }}
                    </div>
                  </td>
                  <td
                    v-for="value in feature.values"
                    :key="value"
                    class="px-6 py-4 text-center text-sm text-gray-900"
                  >
                    <span v-if="typeof value === 'boolean'">
                      <UIcon
                        :name="value ? 'heroicons:check' : 'heroicons:x-mark'"
                        class="w-5 h-5 mx-auto"
                        :class="value ? 'text-secondary-500' : 'text-gray-300'"
                        aria-hidden="true"
                      />
                    </span>
                    <span v-else class="font-medium">{{ value }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
            Frequently asked questions
          </h2>
          <p class="text-xl text-gray-600 animate-on-scroll">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="border border-gray-200 rounded-lg animate-on-scroll"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span class="text-lg font-medium text-gray-900">{{ faq.question }}</span>
                <UIcon
                  :name="activeFaq === index ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                  class="w-5 h-5 text-gray-500 transition-transform duration-200"
                  aria-hidden="true"
                />
              </button>
              
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div v-if="activeFaq === index" class="px-6 pb-4">
                  <div class="text-gray-600 leading-relaxed" v-html="faq.answer" />
                </div>
              </transition>
            </div>
          </div>
        </div>
        
        <!-- Additional Support -->
        <div class="text-center mt-12 animate-on-scroll">
          <p class="text-gray-600 mb-4">Still have questions?</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/support" class="btn btn-outline">
              Contact Support
            </NuxtLink>
            <a
              href="mailto:sales@sematica.com"
              class="btn btn-primary"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Enterprise CTA -->
    <section class="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-4xl font-display font-bold mb-6 animate-on-scroll">
          Need a custom solution?
        </h2>
        <p class="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-on-scroll">
          Our Enterprise plan offers custom integrations, dedicated support, and tailored solutions for your business needs.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
          <a
            href="mailto:sales@sematica.com"
            class="btn bg-white text-primary-600 hover:bg-gray-50 btn-lg font-bold"
          >
            Contact Sales Team
          </a>
          <button class="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
            Schedule Demo
          </button>
        </div>
        
        <div class="mt-8 opacity-75 animate-on-scroll">
          <p class="text-sm">
            ✓ Custom pricing &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Dedicated support &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Custom integrations
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO
useHead({
  title: 'Pricing - Sematica',
  meta: [
    { name: 'description', content: 'Simple, transparent pricing for Sematica\'s AI business automation platform. Start free, scale as you grow.' }
  ]
})

// Reactive data
const isYearly = ref(false)
const activeFaq = ref(null)

// Pricing plans
const pricingPlans = ref([
  {
    name: 'Starter',
    price: 'Free',
    yearlyPrice: 'Free',
    period: '',
    description: 'Perfect for small businesses getting started',
    additionalInfo: 'No credit card required',
    popular: false,
    cta: 'Get Started Free',
    features: [
      { name: 'Up to 100 conversations per month', included: true, limit: 'Monthly limit' },
      { name: 'Basic WhatsApp integration', included: true },
      { name: 'Simple payment processing', included: true },
      { name: 'Email support', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Voice commerce', included: false },
      { name: 'Advanced CRM', included: false },
      { name: 'Custom branding', included: false },
      { name: 'Priority support', included: false }
    ]
  },
  {
    name: 'Professional',
    price: 'KSh 5,000',
    yearlyPrice: 'KSh 48,000',
    period: '/month',
    description: 'Ideal for growing businesses',
    additionalInfo: '14-day free trial',
    savings: 'KSh 12,000',
    popular: true,
    cta: 'Start Free Trial',
    features: [
      { name: 'Unlimited conversations', included: true },
      { name: 'Full WhatsApp Business API', included: true },
      { name: 'Voice commerce', included: true },
      { name: 'Advanced CRM', included: true },
      { name: 'M-Pesa integration', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom branding', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Webhook integrations', included: true }
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    yearlyPrice: 'Custom',
    period: '',
    description: 'For large organizations with specific needs',
    additionalInfo: 'Contact us for pricing',
    popular: false,
    cta: 'Contact Sales',
    features: [
      { name: 'Everything in Professional', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'SLA guarantee', included: true },
      { name: 'On-premise deployment', included: true },
      { name: 'Advanced security', included: true },
      { name: 'Custom training & onboarding', included: true },
      { name: '24/7 phone support', included: true },
      { name: 'White-label solution', included: true }
    ]
  }
])

// Feature comparison table
const comparisonFeatures = ref([
  {
    name: 'Monthly Conversations',
    description: 'Number of customer conversations per month',
    values: ['100', 'Unlimited', 'Unlimited']
  },
  {
    name: 'WhatsApp Business API',
    values: [false, true, true]
  },
  {
    name: 'Voice Commerce',
    values: [false, true, true]
  },
  {
    name: 'M-Pesa Integration',
    values: [false, true, true]
  },
  {
    name: 'CRM Features',
    values: ['Basic', 'Advanced', 'Advanced']
  },
  {
    name: 'Custom Branding',
    values: [false, true, true]
  },
  {
    name: 'Analytics & Reporting',
    values: ['Basic', 'Advanced', 'Advanced']
  },
  {
    name: 'API Access',
    values: [false, true, true]
  },
  {
    name: 'Webhook Integrations',
    values: [false, true, true]
  },
  {
    name: 'Support',
    values: ['Email', 'Priority Email', '24/7 Phone']
  },
  {
    name: 'SLA Guarantee',
    values: [false, false, true]
  },
  {
    name: 'Custom Integrations',
    values: [false, false, true]
  }
])

// FAQ data
const faqs = ref([
  {
    question: 'How does the free trial work?',
    answer: 'Our 14-day free trial gives you full access to all Professional features. No credit card required to start. You can upgrade, downgrade, or cancel anytime during or after the trial period.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa, Visa, Mastercard, and bank transfers. For Enterprise customers, we can arrange custom payment terms including invoicing and purchase orders.'
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When you upgrade, you\'ll be charged the prorated amount for the remainder of your billing cycle. When you downgrade, the change takes effect at the start of the next billing cycle.'
  }
])

// Methods
const toggleBilling = () => {
  isYearly.value = !isYearly.value
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>