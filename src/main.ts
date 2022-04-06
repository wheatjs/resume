import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'

export const createApp = ViteSSG(App)
