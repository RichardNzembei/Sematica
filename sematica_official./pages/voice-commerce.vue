<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Voice Commerce
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Engage customers with AI-powered voice interactions for seamless sales and support.
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
      title="Why Voice Commerce?"
      :features="[
        { title: 'Natural Conversations', description: 'AI-driven voice bots handle customer inquiries naturally.', icon: 'heroicons:chat-bubble-left-right' },
        { title: '24/7 Availability', description: 'Provide support anytime, anywhere.', icon: 'heroicons:clock' },
        { title: 'Multilingual Support', description: 'Serve customers in multiple languages.', icon: 'heroicons:globe-alt' }
      ]"
    />
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-display font-bold text-gray-900 mb-6 animate-on-scroll">
          Industry Examples
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
          See how businesses use Voice Commerce to enhance customer experiences.
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Restaurants</h3>
            <p class="text-gray-600">Take orders via voice, streamlining the process for dine-in and delivery.</p>
          </div>
          <div class="card p-6 animate-on-scroll">
            <h3 class="text-xl font-bold text-gray-900 mb-2">E-commerce</h3>
            <p class="text-gray-600">Guide customers through product selection with voice assistance.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Voice Commerce - Sematica',
  meta: [
    { name: 'description', content: 'Engage customers with AI-powered voice commerce solutions from Sematica.' }
  ]
})
</script>