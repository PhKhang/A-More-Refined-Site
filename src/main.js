import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from "vue-kinesis";

createApp(App).use(VueKinesis).use(router).mount('#app')
