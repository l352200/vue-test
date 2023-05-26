import request from '@/utils/request';
// 工种获取考试配置
export function getUser(data) {
  return request.get({
    url: 'user/getUser',
    data
  })
}