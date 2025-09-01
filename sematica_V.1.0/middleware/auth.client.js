export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  if (!authStore.token && (to.path.includes('/commerce/setup') || to.path.includes('/restaurant/setup'))) {
    console.warn('Redirecting to login: User not authenticated');
    return navigateTo('/login');
  }
});