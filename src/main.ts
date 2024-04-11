
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//全量引入element-plus

import ElementPlus from 'element-plus'

import "@/styles/basic.scss"
import 'element-plus/theme-chalk/dark/css-vars.css'
import "@/styles/element.scss"
import "@/styles/var.scss"

import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue'
import {i18n} from "@/messages/i18n";

const app = createApp(App)
const head = createHead()

app.use(i18n)
app.use(head)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
