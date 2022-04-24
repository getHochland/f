import {createApp} from 'vue'

import Router from '@/router'
import App from "@/App";
import Store from './store'
import vueScrollTo from 'vue-scrollto'
import './assets/css/style.scss'

createApp(App)
    .use(Router)
    .use(Store)
    .use(vueScrollTo)
    .mount('#app')

