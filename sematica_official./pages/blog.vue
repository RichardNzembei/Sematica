```vue
<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Blog & Resources
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Stay updated with insights on AI, WhatsApp automation, and business growth.
        </p>
      </div>
    </section>
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="post in posts" :key="post.title" class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <NuxtLink :to="post.link" class="btn btn-primary">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog - Sematica',
  meta: [
    { name: 'description', content: 'Read the latest insights on AI, WhatsApp automation, M-Pesa integrations, and business growth from Sematica.' }
  ]
})

const posts = [
  {
    title: 'How AI is Transforming Small Businesses',
    excerpt: 'Discover how AI-powered tools can streamline your operations.',
    link: '/blog/ai-transforming-business'
  },
  {
    title: 'Maximizing Sales with WhatsApp Automation',
    excerpt: 'Learn how to automate customer interactions on WhatsApp.',
    link: '/blog/whatsapp-automation'
  },
  {
    title: 'M-Pesa: The Future of Payments in Kenya',
    excerpt: 'Explore the benefits of M-Pesa integration for your business.',
    link: '/blog/mpesa-payments'
  }
]
</script>
```