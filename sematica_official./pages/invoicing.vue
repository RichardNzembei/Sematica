<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Invoicing
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Automate billing and invoicing with ease.
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
      title="Why Our Invoicing?"
      :features="[
        { title: 'Automated Invoices', description: 'Generate and send invoices automatically.', icon: 'heroicons:document-text' },
        { title: 'Custom Templates', description: 'Create branded invoices in minutes.', icon: 'heroicons:paint-brush' },
        { title: 'Payment Tracking', description: 'Monitor invoice status and payments.', icon: 'heroicons:currency-dollar' }
      ]"
    />
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Industry Examples
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
          See how businesses streamline billing.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Freelancers</h3>
            <p class="text-gray-600">Send professional invoices to clients effortlessly.</p>
          </div>
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Retail</h3>
            <p class="text-gray-600">Automate billing for in-store and online sales.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Invoicing - Sematica',
  meta: [
    { name: 'description', content: 'Automate billing and invoicing with Sematica\'s powerful tools.' }
  ]
})
</script>
```