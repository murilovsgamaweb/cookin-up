import './assets/main.css'
import 'quasar/dist/quasar.css'

import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import { createApp } from 'vue'
import App from './App.vue'



createApp(App)
  .use(Quasar,{
    plugins: {},
  })
  .mount('#app')
