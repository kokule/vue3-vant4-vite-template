import { createApp } from 'vue'
import { store } from '@/store'
import { utils } from './utils'
// normalize.css
import 'normalize.css/normalize.css'
// 全局样式
import '@/styles/index.scss'
// svg icon
import 'virtual:svg-icons-register'
// import 'amfe-flexible'
import components from './components'


// @ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(components)
app.config.globalProperties.$utils = utils


app.mount('#app')
