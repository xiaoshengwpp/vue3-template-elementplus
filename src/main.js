import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 初始化样式
import './assets/css/initializeStyle.css'
// 导入 svgIcon
import installIcons from '@/icons'
// 路由前置守卫
import './routingGuard'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
