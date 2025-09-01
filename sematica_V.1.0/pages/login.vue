<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
    <div class="flex flex-col md:flex-row w-full md:max-w-6xl bg-white shadow-2xl overflow-hidden">
      <!-- Left Side: Welcome Section -->
      <div class="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Hey there 👋</h1>
        <p class="text-lg md:text-xl font-medium opacity-90">Good to see you again!</p>
        <p class="text-sm mt-4 opacity-80">Log in to pick up right where you left off</p>
      </div>

      <!-- Right Side: Login Form -->
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
          Sign in to your account
        </h2>
        
        <form class="space-y-5" @submit.prevent="handleLogin">
          <!-- Error/Success Message -->
          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
          <div v-if="success" class="text-green-500 text-sm">{{ success }}</div>

          <!-- Email -->
          <RadixTextField v-model="form.email" label="Email Address" type="email" placeholder="hello@example.com" />
          
          <!-- Password -->
          <div>
            <div class="flex flex-col">
              <RadixTextField v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
              <a href="#" class="text-sm text-indigo-600 hover:underline text-right mt-2">Forgot Password?</a>
            </div>
          </div>
          
          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Logging In...' : 'Login' }}
          </button>
        </form>

        <!-- Signup Redirect -->
        <p class="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account? 
          <NuxtLink to="/signup" class="text-indigo-600 font-medium hover:underline">Get Started</NuxtLink>
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
  email: '',
  password: '',
});
const error = ref('');
const success = ref('');
const isLoading = ref(false);

async function handleLogin() {
  error.value = '';
  success.value = '';
  isLoading.value = true;

  // Basic form validation
  if (!form.value.email || !form.value.password) {
    error.value = 'Please fill in all required fields';
    isLoading.value = false;
    console.error('Validation failed: Missing required fields');
    return;
  }

  try {
    console.log('Submitting login with data:', {
      email: form.value.email,
      password: '[REDACTED]',
    });
    const response = await authStore.login({
      email: form.value.email,
      password: form.value.password,
    });
    console.log('Login successful:', response);
    success.value = 'Login successful! Redirecting...';
    form.value = { email: '', password: '' };
    setTimeout(() => {
      navigateTo('/');
    }, 2000);
  } catch (err) {
    console.error('Login failed:', err.data?.message || err);
    error.value = err.data?.message || 'Failed to log in';
  } finally {
    isLoading.value = false;
  }
}
</script>