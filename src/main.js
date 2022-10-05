import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
