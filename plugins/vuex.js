import store from '../store/events'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(store);
})
