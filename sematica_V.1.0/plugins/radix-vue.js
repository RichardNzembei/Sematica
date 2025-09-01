import { SelectRoot, SelectTrigger, SelectContent, SelectItem, SelectValue } from 'radix-vue';

     export default defineNuxtPlugin((nuxtApp) => {
       nuxtApp.vueApp.component('SelectRoot', SelectRoot);
       nuxtApp.vueApp.component('SelectTrigger', SelectTrigger);
       nuxtApp.vueApp.component('SelectContent', SelectContent);
       nuxtApp.vueApp.component('SelectItem', SelectItem);
       nuxtApp.vueApp.component('SelectValue', SelectValue);
     });