<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Template Gallery
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Explore ready-to-use assistant flows for your business.
        </p>
      </div>
    </section>
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TemplateCard
            v-for="template in templates"
            :key="template.title"
            :template="template"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Templates - Sematica',
  meta: [
    { name: 'description', content: 'Explore Sematica\'s ready-to-use assistant flow templates for restaurants, clinics, e-commerce, and more.' }
  ]
})

const templates = [
  {
    title: 'Restaurant Ordering',
    description: 'Streamline dine-in and delivery orders with WhatsApp.',
    link: '/templates/restaurant'
  },
  {
    title: 'Clinic Bookings',
    description: 'Automate patient appointment scheduling and reminders.',
    link: '/templates/clinic'
  },
  {
    title: 'E-commerce Store',
    description: 'Set up a WhatsApp store with product catalogs and payments.',
    link: '/templates/ecommerce'
  },
  {
    title: 'Logistics Tracking',
    description: 'Provide real-time delivery updates to customers.',
    link: '/templates/logistics'
  },
  {
    title: 'Booking System',
    description: 'Manage bookings for events, hotels, or services.',
    link: '/templates/booking'
  }
]
</script>