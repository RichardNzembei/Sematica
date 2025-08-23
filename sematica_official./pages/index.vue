```vue
<template>
  <div>
    <HeroSection />
    <FeatureSection
      :features="[
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
        },
        {
          title: 'WhatsApp Business',
          description: 'Automate customer support and sales through WhatsApp Business API',
          benefits: ['Business API access', 'Automated responses', 'Rich media support'],
          icon: 'heroicons:chat-bubble-oval-left-ellipsis',
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600',
          link: '/whatsapp'
        },
        {
          title: 'Invoice & Billing',
          description: 'Generate and send professional invoices automatically',
          benefits: ['Auto-generated invoices', 'Payment tracking', 'Tax compliance'],
          icon: 'heroicons:document-text',
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600',
          link: '/invoicing'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Track performance with detailed analytics and reporting',
          benefits: ['Real-time metrics', 'Custom reports', 'Export capabilities'],
          icon: 'heroicons:chart-bar',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          link: '/analytics'
        }
      ]"
    />
    <DemoSection />
    <UseCaseSection :useCases="useCases" />
    <TestimonialSection :testimonials="testimonials" />
    <PricingOverview />
    <section class="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-on-scroll">
          Join hundreds of businesses already using Sematica to automate their customer interactions and boost revenue.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll">
          <a
            :href="$config.public.appUrl + '/signup'"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-white text-primary-600 hover:bg-gray-50 btn-xl font-bold"
          >
            Start Your Free Trial
          </a>
          <button
            @click="scrollToDemo"
            class="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-xl"
          >
            Watch Demo First
          </button>
        </div>
        <div class="mt-8 opacity-75 animate-on-scroll">
          <p class="text-sm">
            ✓ No credit card required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ 14-day free trial &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Setup in 5 minutes
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Sematica - AI Business Automation Platform',
  meta: [
    { name: 'description', content: 'Automate your business with AI-driven chat, voice, and commerce solutions. WhatsApp automation, M-Pesa integration, and more.' },
    { name: 'keywords', content: 'AI automation, WhatsApp business, M-Pesa integration, voice commerce, Kenya business automation' }
  ]
})

useSchemaOrg([
  {
    '@type': 'Organization',
    name: 'Sematica',
    url: 'https://sematica.com',
    logo: 'https://sematica.com/logo.png',
    description: 'AI business automation platform for chat, voice, and commerce',
    foundingDate: '2023',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254700000000',
      contactType: 'Customer Support'
    }
  }
])

const useCases = ref([
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
])

const testimonials = ref([
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
])

const scrollToDemo = () => {
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
```