// 路由守卫
import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

/**
 * https://next.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%8F%AF%E9%80%89%E7%9A%84%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%8F%82%E6%95%B0-next
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户信息是否存在 不存在则获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token的情况下，只能进login页面或者存在白名单的页面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
