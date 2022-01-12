/**
 * 用于处理所有和用户相关的内容
 * */
import { login, getUserInfo } from '@/api/sys'
// import md5 from 'md5' mock 数据后 加 这一步 太麻烦了
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  // namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  namespaced: true,
  // state 类似 data 这里面写入数据
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  // mutations 类似methods 写方法对数据做出更改(同步操作)
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  // actions 类似methods 写方法对数据做出更改(异步操作)
  actions: {
    /**
     * 登录请求动作
    */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          // password: md5(password)
          password
        })
          .then(data => {
            // console.log(data)
            this.commit('user/setToken', data.token)
            router.push('/')
            // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户信息
    */
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /**
     * 处理用户推出登录
    */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
