import variables from '@/styles/variables.scss'
// getters 类似 computed 在这里面写个方法    可以做些处理快捷访问
const getters = {
  token: state => state.user.token,
  // true 表示用户信息已存在
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo,
  cssVar: state => variables
}

export default getters
