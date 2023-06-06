
import request from '@/utils/request';
//附件上传
export function uploadFile(data) {
  return request({
    url: '/common/upload',
    method: "post",
    data
  })
}
