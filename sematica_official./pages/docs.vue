```vue
<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Developer Documentation
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Build powerful integrations with Sematica's APIs and webhooks.
        </p>
        <a
          href="https://docs.sematica.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-lg animate-on-scroll"
        >
          View Documentation
        </a>
      </div>
    </section>
    <FeatureSection
      title="Developer Resources"
      :features="[
        { title: 'API Reference', description: 'Detailed guides for our REST API.', icon: 'heroicons:code-bracket' },
        { title: 'Webhook Setup', description: 'Real-time event notifications.', icon: 'heroicons:link' },
        { title: 'Zapier Integration', description: 'Connect with 1000+ apps via Zapier.', icon: 'heroicons:puzzle-piece' }
      ]"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Documentation - Sematica',
  meta: [
    { name: 'description', content: 'Explore Sematica\'s developer documentation for APIs, webhooks, and integrations.' }
  ]
})
</script>
```