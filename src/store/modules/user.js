/**
 * 用于处理所有和用户相关的内容
 * */
import { login } from '@/api/sys'
// import md5 from 'md5'
export default {
  // namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  namespaced: true,
  // state 类似 data 这里面写入数据
  state: () => ({}),
  // getters 类似 computed 在这里面写个方法
  getters: {
  },
  // mutations 类似methods 写方法对数据做出更改(同步操作)
  mutations: {},
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
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
