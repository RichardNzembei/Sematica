```vue
<template>
  <section class="section bg-white">
    <div class="container-custom text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-8 animate-on-scroll">
        Trusted by Businesses Across Kenya
      </h2>
      <div class="flex flex-wrap justify-center items-center gap-8 animate-on-scroll">
        <div v-for="logo in logos" :key="logo" class="h-12 w-32 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = ['Company A', 'Company B', 'Company C', 'Company D']
</script>
```