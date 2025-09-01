<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
    <div class="flex flex-col md:flex-row w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      <div class="w-full md:w-1/2 p-6 md:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col justify-center text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Set Up Your Business</h1>
        <p class="text-lg md:text-xl font-medium opacity-90">Create your shop in minutes!</p>
        <p class="text-sm mt-4 opacity-80">Connect with customers and grow your business with ease.</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematicca</h2>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
          Set Up Your {{ appType }} Store
        </h2>
        <form class="space-y-5" @submit.prevent="handleSetup">
          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
          <div v-if="success" class="text-green-500 text-sm">{{ success }}</div>
          <RadixTextField 
            v-model="form.businessName" 
            label="Business Name" 
            placeholder="e.g., Joe's Boutique or Tasty Bites" 
          />
          <template v-if="appType === 'E-Commerce'">
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1">Product Categories</label>
              <SelectRoot v-model="form.productCategories">
                <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select main product category" />
                </SelectTrigger>
                <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                  <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="home">Home & Furniture</SelectItem>
                  <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                </SelectContent>
              </SelectRoot>
            </div>
            <RadixTextField 
              v-model="form.storeType" 
              label="Store Type" 
              placeholder="e.g., Online Only, Physical + Online" 
            />
          </template>
          <template v-else-if="appType === 'Restaurant'">
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1">Cuisine Type</label>
              <SelectRoot v-model="form.cuisineType">
                <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select cuisine type" />
                </SelectTrigger>
                <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="african">African</SelectItem>
                  <SelectItem value="asian">Asian</SelectItem>
                  <SelectItem value="fastfood">Fast Food</SelectItem>
                </SelectContent>
              </SelectRoot>
            </div>
            <RadixTextField 
              v-model="form.seatingCapacity" 
              label="Seating Capacity" 
              placeholder="e.g., 50 seats" 
              type="number"
            />
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1">Delivery Option</label>
              <SelectRoot v-model="form.deliveryOption">
                <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select delivery option" />
                </SelectTrigger>
                <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </SelectRoot>
            </div>
          </template>
          <RadixTextField 
            v-model="form.businessEmail" 
            label="Business Email" 
            type="email" 
            placeholder="e.g., contact@yourbusiness.com" 
          />
          <RadixTextField 
            v-model="form.phone" 
            label="Phone Number" 
            placeholder="e.g., +254 700 123 456" 
          />
          <RadixTextField 
            v-model="form.address" 
            label="Physical Address" 
            placeholder="e.g., 123 Main St, Nairobi" 
          />
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Creating Shop...' : 'Create My Shop' }}
          </button>
        </form>
        <p class="text-sm text-gray-600 mt-6 text-center">
          Already have a shop? 
          <NuxtLink to="/" class="text-blue-600 font-medium hover:underline">Go to Dashboard</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, navigateTo } from '#app';
import { useAuthStore } from '~/stores/auth';
import { useBusinessStore } from '~/stores/business';
import RadixTextField from '~/components/RadixTextField.vue';
import { SelectRoot, SelectTrigger, SelectContent, SelectItem, SelectValue } from 'radix-vue';

definePageMeta({
  middleware: ['auth'],
});

const route = useRoute();
const authStore = useAuthStore();
const businessStore = useBusinessStore();
const error = ref('');
const success = ref('');
const isLoading = ref(false);

const appType = computed(() => {
  return route.path.includes('commerce') ? 'E-Commerce' : 'Restaurant';
});

const form = ref({
  businessName: '',
  productCategories: '',
  storeType: '',
  cuisineType: '',
  seatingCapacity: '',
  deliveryOption: '',
  businessEmail: '',
  phone: '',
  address: '',
});

async function handleSetup() {
  error.value = '';
  success.value = '';
  isLoading.value = true;

  if (!authStore.token) {
    error.value = 'You must be logged in to set up a business';
    isLoading.value = false;
    console.error('Setup failed: User not authenticated');
    setTimeout(() => navigateTo('/login'), 2000);
    return;
  }

  const requiredFields = ['businessName', 'businessEmail', 'phone', 'address'];
  if (appType.value === 'E-Commerce') {
    requiredFields.push('productCategories', 'storeType');
  } else if (appType.value === 'Restaurant') {
    requiredFields.push('cuisineType', 'seatingCapacity', 'deliveryOption');
  }

  for (const field of requiredFields) {
    if (!form.value[field]) {
      error.value = `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
      isLoading.value = false;
      console.error(`Validation failed: Missing ${field}`);
      return;
    }
  }

  try {
    console.log('Submitting business setup with data:', {
      appType: appType.value,
      businessName: form.value.businessName,
      productCategories: form.value.productCategories,
      storeType: form.value.storeType,
      cuisineType: form.value.cuisineType,
      seatingCapacity: form.value.seatingCapacity,
      deliveryOption: form.value.deliveryOption,
      businessEmail: form.value.businessEmail,
      phone: form.value.phone,
      address: form.value.address,
    });
    const response = await businessStore.setupBusiness({
      app_type: appType.value,
      business_name: form.value.businessName,
      product_categories: form.value.productCategories,
      store_type: form.value.storeType,
      cuisine_type: form.value.cuisineType,
      seating_capacity: form.value.seatingCapacity,
      delivery_option: form.value.deliveryOption,
      business_email: form.value.businessEmail,
      phone: form.value.phone,
      address: form.value.address,
    }, authStore.token);
    console.log('Business setup successful:', response);
    success.value = 'Shop created successfully! Redirecting to payment setup...';
    form.value = {
      businessName: '',
      productCategories: '',
      storeType: '',
      cuisineType: '',
      seatingCapacity: '',
      deliveryOption: '',
      businessEmail: '',
      phone: '',
      address: '',
    };
    setTimeout(() => {
      navigateTo('/paymentgateway');
    }, 2000);
  } catch (err) {
    console.error('Business setup failed:', err.data?.message || err);
    error.value = err.data?.message || 'Failed to set up business';
  } finally {
    isLoading.value = false;
  }
}
</script>