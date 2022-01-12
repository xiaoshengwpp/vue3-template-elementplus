/**
 * 封装接口请求模块
*/
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    url: 'https://www.fastmock.site/mock/b88a55a371cb6d61aa8e145c1cb524ad/xswpp/sys/login',
    method: 'POST',
    data
  })
}
/**
 * 获取用户信息
*/
export const getUserInfo = () => {
  return request({
    url: 'https://www.fastmock.site/mock/b88a55a371cb6d61aa8e145c1cb524ad/xswpp/sys/profile',
    method: 'GET'
  })
}
