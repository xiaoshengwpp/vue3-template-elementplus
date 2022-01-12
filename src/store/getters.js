// getters 类似 computed 在这里面写个方法    可以做些处理快捷访问
const getters = {
  token: state => state.user.token
}

export default getters
