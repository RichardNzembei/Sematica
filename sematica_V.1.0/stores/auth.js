import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async register(userData) {
      const config = useRuntimeConfig();
      console.log('Sending registration request to:', `${config.public.apiBase}/api/auth/register`);
      const response = await $fetch(`${config.public.apiBase}/api/auth/register`, {
        method: 'POST',
        body: userData,
      });
      return response;
    },
    async login(credentials) {
      const config = useRuntimeConfig();
      console.log('Sending login request to:', `${config.public.apiBase}/api/auth/login`);
      const response = await $fetch(`${config.public.apiBase}/api/auth/login`, {
        method: 'POST',
        body: credentials,
      });
      this.token = response.token;
      this.user = await this.fetchUser();
      console.log('Login completed, token stored:', this.token);
      return response;
    },
    async fetchUser() {
      const config = useRuntimeConfig();
      console.log('Fetching user data from:', `${config.public.apiBase}/api/auth/me`);
      const response = await $fetch(`${config.public.apiBase}/api/auth/me`, {
        headers: { Authorization: `Bearer ${this.token}` },
      });
      return response;
    },
  },
});