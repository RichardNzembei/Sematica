<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Payments
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Accept payments seamlessly with M-Pesa and card processing.
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
      title="Why Our Payments?"
      :features="[
        { title: 'M-Pesa Integration', description: 'Accept payments via M-Pesa instantly.', icon: 'heroicons:credit-card' },
        { title: 'Secure Transactions', description: 'Ensure safe and reliable payments.', icon: 'heroicons:lock-closed' },
        { title: 'Multi-Currency Support', description: 'Process payments in multiple currencies.', icon: 'heroicons:currency-dollar' }
      ]"
    />
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Industry Examples
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
          See how businesses accept payments.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">E-commerce</h3>
            <p class="text-gray-600">Offer seamless checkout with M-Pesa and cards.</p>
          </div>
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Restaurants</h3>
            <p class="text-gray-600">Accept mobile payments for dine-in and delivery.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Payments - Sematica',
  meta: [
    { name: 'description', content: 'Accept payments seamlessly with Sematica\'s M-Pesa and card processing solutions.' }
  ]
})
</script>