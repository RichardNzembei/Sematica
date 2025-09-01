<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
    <div class="flex w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      <!-- Left Side -->
      <div class="w-1/2 p-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center">
        <h1 class="text-4xl font-bold mb-2">Welcome aboard</h1>
        <p class="text-xl font-medium opacity-90">Your customers deserve conversations that care</p>
        <p class="text-sm mt-4 opacity-80">Sematicca gives you the power to connect, engage, and grow</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematica</h2>
        </div>
      </div>

      <!-- Right Side: Signup Form -->
      <div class="w-1/2 p-12 flex flex-col justify-center">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Create your account</h2>
        <form class="space-y-5" @submit.prevent="handleSignup">
          <!-- Error/Success Message -->
          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
          <div v-if="success" class="text-green-500 text-sm">{{ success }}</div>

          <!-- First + Last Name -->
          <div class="grid grid-cols-2 gap-4">
            <RadixTextField v-model="form.firstName" label="First Name" placeholder="first name" />
            <RadixTextField v-model="form.lastName" label="Last Name" placeholder="last name" />
          </div>

          <!-- Company -->
          <RadixTextField v-model="form.company" label="Company" placeholder="company name" />

          <!-- Country Dropdown -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Country</label>
            <SelectRoot v-model="form.country">
              <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                <SelectItem value="ke">🇰🇪 Kenya</SelectItem>
                <SelectItem value="us">🇺🇸 USA</SelectItem>
                <SelectItem value="uk">🇬🇧 UK</SelectItem>
              </SelectContent>
            </SelectRoot>
          </div>

          <!-- Phone -->
          <RadixTextField v-model="form.phone" label="Phone Number" placeholder="+254" />

          <!-- Email -->
          <RadixTextField v-model="form.email" label="Email Address" type="email" placeholder="hello@example.com" />

          <!-- Password -->
          <RadixTextField v-model="form.password" label="Password" type="password" placeholder="Enter your password" />

          <!-- Confirm Password -->
          <RadixTextField v-model="form.confirmPassword" label="Confirm Password" type="password" placeholder="Confirm your password" />

          <!-- Signup Button -->
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Signing Up...' : 'Get Started' }}
          </button>
        </form>

        <p class="text-sm text-gray-600 mt-6 text-center">
          Already have an account?
          <NuxtLink to="/login" class="text-indigo-600 font-medium hover:underline">Login</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';
import RadixTextField from '~/components/RadixTextField.vue';

const authStore = useAuthStore();
const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
});
const error = ref('');
const success = ref('');
const isLoading = ref(false);

async function handleSignup() {
  error.value = '';
  success.value = '';
  isLoading.value = true;

  // Basic form validation
  if (!form.value.firstName || !form.value.lastName || !form.value.email || !form.value.phone || !form.value.password) {
    error.value = 'Please fill in all required fields';
    isLoading.value = false;
    console.error('Validation failed: Missing required fields');
    return;
  }
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match';
    isLoading.value = false;
    console.error('Validation failed: Passwords do not match');
    return;
  }

  try {
    console.log('Submitting registration with data:', {
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      phone: form.value.phone,
      company: form.value.company,
      country: form.value.country,
      password: '[REDACTED]',
    });
    const response = await authStore.register({
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      phone: form.value.phone,
      company: form.value.company,
      country: form.value.country,
      password: form.value.password,
    });
    console.log('Registration successful:', response);
    success.value = 'Account created successfully! Redirecting to login...';
    form.value = {
      firstName: '',
      lastName: '',
      company: '',
      country: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    setTimeout(() => {
      navigateTo('/login');
    }, 2000);
  } catch (err) {
    console.error('Registration failed:', err.data?.message || err);
    // Handle specific error cases
    error.value =
      err.data?.message?.includes('Duplicate entry') && err.data.message.includes('users.email')
        ? 'Email already registered'
        : err.data?.message || 'Failed to create account';
  } finally {
    isLoading.value = false;
  }
}
</script>