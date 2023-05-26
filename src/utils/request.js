
import axios from 'axios'
import {MessageBox, Message, Loading} from 'element-ui'

// import store from '@/store'
// let loginUserInfo = localStorage.getItem('loginUser') || "{}";
// loginUserInfo = JSON.parse(loginUserInfo);

/**
 * 加载中loading的提示配置
 */
let _loading = {
  // loading服务调用赋值对象
  serviceObj: null,
  // loading 配置参数
  options: {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  },
  // 是否开启loading遮罩
  open: false,
}
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
  // transformRequest: [function (data) {
  //   let ret = '';
  //   for (let it in data) {
  //       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
  //   }
  //   return ret;
  // }]
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   let each request carry token
    //   ['X-Token'] is a custom headers key
    //   please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log("发起请求异常：", error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code && res.code !== 0) {
      // 非退出登录接口显示提示，退出登陆接口不提示异常，直接退出
      if (response.config.url.indexOf("logOutOrg") == -1) {
        MessageBox.alert(res.msg || 'Error', '提示', {
          type: 'error',
          confirmButtonText: '确定',
          distinguishCancelAndClose: true,
          dangerouslyUseHTMLString: true,
        })
      }
      // S302: 用户未登陆;
      // if (res.code === "S302") {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      // return Promise.reject(new Error(res || "error"))
      return Promise.reject(res.msg || "接口异常");
    } else {
      return res
    }
  },
  error => {
    console.log('请求返回异常：' + error) // for debug
    MessageBox.alert(error.msg || '服务端异常', '提示', {
      type: 'error',
      confirmButtonText: '确定',
      distinguishCancelAndClose: true,
      dangerouslyUseHTMLString: true,
    })
    return Promise.reject(error)
  }
)

const request = {
  get: ({url, data}) => {
    // let api = handleUrl({url: url});
    let api = "api/" + handleUrl({url: url});
    // let orgId = store.getters.orgId || "";
    let params = handleParams({params: data});
    return service.get(api, {params});
  },
  post: ({url, data}) => {
    // let api = handleUrl({url: url});
    let api = "api/" + handleUrl({url: url});
    // let orgId = store.getters.orgId || "";
    let params = handleParams({params: data});
    return service.post(api, params);
  },
}
export default request


function handleUrl({url = ''}) {
  // 默认增加请求时间，清除浏览器缓存
  let n = new Date().getTime();
  url = `${url}${url.indexOf('?') != -1 ? '&' : '?'}t=${n}`;
  return url
}

function handleParams({params = {}}) {
  // 是否查询orgId，替换参数名为queryOrgId
  if (params.orgId && !params.queryOrgId) {
    params.queryOrgId = params.orgId;
  }
  // params = Object.assign({orgId: loginUserInfo.orgId, sessionType: 1}, params)
  return params
}