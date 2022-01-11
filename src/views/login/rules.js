export const validatePassword = () => {
  return (rule, value, callback) => {
    // 这里简单校验 通常实际业务中会对密码进行加密 且校验规则不会这么简单
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
