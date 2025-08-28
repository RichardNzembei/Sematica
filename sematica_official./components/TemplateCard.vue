```vue
<template>
  <div class="card p-6 animate-on-scroll">
    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ template.title }}</h3>
    <p class="text-gray-600 mb-4">{{ template.description }}</p>
    <NuxtLink :to="template.link" class="btn btn-primary">Use Template</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  template: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Template',
      description: 'Description of the template.',
      link: '/templates/template'
    })
  }
})
</script>
```