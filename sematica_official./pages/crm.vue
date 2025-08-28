```vue
<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          CRM
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Streamline customer relationships with our powerful CRM tools.
        </p>
        <a
          :href="$config.public.appUrl + '/signup?plan=professional'"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-lg animate-on-scroll"
        >
          Start Free Trial
        </a>
      </div>
    </section>
    <FeatureSection
      title="Why Our CRM?"
      :features="[
        { title: 'Unified Customer Data', description: 'Centralize customer interactions in one platform.', icon: 'heroicons:user-group' },
        { title: 'Automated Follow-Ups', description: 'Automate emails and WhatsApp messages.', icon: 'heroicons:envelope' },
        { title: 'Analytics Dashboard', description: 'Track customer engagement and sales metrics.', icon: 'heroicons:chart-bar' }
      ]"
    />
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Industry Examples
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
          See how businesses use our CRM to grow.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Clinics</h3>
            <p class="text-gray-600">Manage patient records and appointment reminders.</p>
          </div>
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Logistics</h3>
            <p class="text-gray-600">Track client orders and delivery updates.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'CRM - Sematica',
  meta: [
    { name: 'description', content: 'Streamline customer relationships with Sematica\'s CRM tools.' }
  ]
})
</script>
```