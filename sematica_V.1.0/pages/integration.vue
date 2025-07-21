<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Channel & Payment Integrations</h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
      Connect Sematica with your favorite platforms and payment gateways.
    </p>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
      <li v-for="(integration, index) in integrations" :key="integration" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 animate-fade-in" :style="{ animationDelay: `${0.4 + index * 0.2}s` }">
        {{ integration }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const integrations = [
  'WhatsApp via 360Dialog/Twilio',
  'Instagram/Facebook via Meta APIs',
  'M-Pesa, Stripe, Flutterwave',
  'Web Widget, Voice (Vapi/Twilio)',
];
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>