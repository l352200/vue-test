import request from '@/utils/request';
// 工种获取考试配置
export function getUser(data) {
  return request.get({
    url: '/getUser',
    data
  })
}

// 登录
export function login(data) {
  return request.post({
    url: '/login',
    data
  })
}