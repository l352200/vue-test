import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import getPageTitle from '@/utils/get-page-title'
import { getToken,removeToken } from '@/utils/auth' // get token from cookie
import store from './store'
import { Message } from 'element-ui'
// import { dictData } from '@/api/index'
// import { getConfigKey } from '@/api/common'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whileList=['/home','/login','/page/info','/info/search']
const whileNameList=['home','login','infoSearch','infoItem']
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  if(getToken()) {
    try {
      await store.dispatch('user/getInfo')
      next();
      NProgress.done()
    } catch(error) {
      console.log(error, 'permission err');
      Message.error(error || '无访问权限，请重新登录')
      removeToken()
      router.push('/home')
    }
  } else {
    if(whileList.includes(to.path)||whileNameList.includes(to.name)) {
      next();
      NProgress.done()
    } else {
      console.log(to.path,'to.path');
      console.log(to.name,'to.name');
      next(`/home?redirect=${to.fullPath}`)
      NProgress.done()
    }
  }
  // set page title
  // document.title = getPageTitle(to.meta.title)

  // 是否获取到字典
  // let flag = false
  // if(store.getters.dictKeyValue) {
  //   flag = true
  // } else {
  //   let data = await dictData()
  //   store.dispatch("dict/addDictList", data)
  //   let val = await getConfigKey('ksbm.config.paramEnc')
  //   store.dispatch("dict/setIsEncryption", val)
  //   flag = true
  // }
  // if(flag) {
  // if(getToken()) {
  //   // 登录后判断登录页重定向
  //   if(to.path == '/login') {
  //     next({
  //       path: '/exam/personal/index',
  //       query: to.query
  //     })
  //     NProgress.done()
  //   } else {
  //     if(!store.getters.permissions) {
  //       try {
  //         await store.dispatch('user/getInfo')
  //         next();
  //         NProgress.done()
  //       } catch(error) {
  //         Message.closeAll();
  //         Message.error(error || '无访问权限，请重新登录')
  //         NProgress.done()
  //       }
  //     } else {
  //       next();
  //     }
  //   }
  // } else {
  //   /* 没有token的情况*/
  //   if(to.path.indexOf('/exam/personal') == -1) {
  //     // 是白名单的地址则允许访问
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/home?redirect=${to.fullPath}`)
  //     NProgress.done()
  //   }
  // }
  // }
})

router.afterEach(() => {
  // setTimeout(() => {
  //   var _hmt = _hmt || [];
  //   (function () {
  //     //每次执行前，先移除上次插入的代码
  //     document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
  //     var hm = document.createElement("script");
  //     hm.src = "https://hm.baidu.com/hm.js?a2f3bea7dfe8ddab8de9e6e62b46dc17";
  //     hm.id = "baidu_tj"
  //     var s = document.getElementsByTagName("script")[0];
  //     s.parentNode.insertBefore(hm, s);
  //   })()
  // }, 0)
  // finish progress bar
  NProgress.done()
})
