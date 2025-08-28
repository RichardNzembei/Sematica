```vue
<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          About Sematica
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          We're on a mission to empower businesses with AI-driven automation.
        </p>
      </div>
    </section>
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-display font-bold text-gray-900 text-center mb-6 animate-on-scroll">
          Our Mission
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-12 animate-on-scroll">
          To simplify business operations and enhance customer experiences through innovative AI solutions.
        </p>
        <h2 class="text-3xl font-display font-bold text-gray-900 text-center mb-6 animate-on-scroll">
          Our Team
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="card p-6 animate-on-scroll">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span class="text-primary-600 font-bold text-xl">{{ member.name[0] }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 text-center mb-2">{{ member.name }}</h3>
            <p class="text-gray-600 text-center">{{ member.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Sematica',
  meta: [
    { name: 'description', content: 'Learn about Sematica\'s mission and team, dedicated to AI-driven business automation.' }
  ]
})

const team = [
  { name: 'Gabriel Luseno', title: 'Founder & CEO' },
  { name: 'Nzembei Reuben', title: 'Founder & CTO' },
  { name: 'Levi Mathews', title: 'Founder & CTO' }
]
</script>