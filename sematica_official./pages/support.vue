<template>
  <div>
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll">
          Support
        </h1>
        <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-on-scroll">
          Get help with Sematica's features and integrations.
        </p>
      </div>
    </section>
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-display font-bold text-gray-900 text-center mb-6 animate-on-scroll">
          Frequently Asked Questions
        </h2>
        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-lg animate-on-scroll"
            :style="{ 'animation-delay': `${index * 0.1}s` }"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="text-lg font-medium text-gray-900">{{ faq.question }}</span>
              <UIcon
                :name="activeFaq === index ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
            </button>
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div v-if="activeFaq === index" class="px-6 pb-4">
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
        <div class="text-center mt-12 animate-on-scroll">
          <h2 class="text-3xl font-display font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <form @submit.prevent="submitContact" class="max-w-md mx-auto space-y-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              v-model="form.message"
              placeholder="Your Message"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn btn-primary w-full"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Support - Sematica',
  meta: [
    { name: 'description', content: 'Get support for Sematica with FAQs and our contact form.' }
  ]
})

const activeFaq = ref(null)
const form = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)

const faqs = [
  {
    question: 'How do I set up WhatsApp automation?',
    answer: 'Follow our documentation at docs.sematica.com for step-by-step guides.'
  },
  {
    question: 'What is the free trial period?',
    answer: 'The free trial lasts 14 days and includes all Professional features.'
  },
  {
    question: 'How secure is payment processing?',
    answer: 'We use industry-standard encryption for all transactions.'
  }
]

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const submitContact = async () => {
  isSubmitting.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    form.value = { name: '', email: '', message: '' }
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Contact form error:', error)
    // Handle error (e.g., show an error message)
  } finally {
    isSubmitting.value = false
  }
}
</script>