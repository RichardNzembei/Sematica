import { defineStore } from 'pinia';

export const useBusinessStore = defineStore('business', {
  state: () => ({
    business: null,
  }),
  actions: {
    async setupBusiness(businessData, token) {
      const config = useRuntimeConfig();
      console.log('Sending business setup request to:', `${config.public.apiBase}/api/business/setup`);
      const response = await $fetch(`${config.public.apiBase}/api/business/setup`, {
        method: 'POST',
        body: businessData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.business = response;
      return response;
    },
  },
});