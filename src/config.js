import axios from 'axios';
import {Loading} from 'element-ui';
var config = {
    host: "/api",
    alertMsg(msg, type, duration) {
        alert(msg, "提示", {
            confirmButtonText: '确定',
            distinguishCancelAndClose: true,
            dangerouslyUseHTMLString: true,
            type: type || 'success',
        });
        /* alertMsg({
            message: msg,
            type: type || 'success',
            showClose: true,
            duration: duration == null ? 3000 : duration,
            dangerouslyUseHTMLString: true,
        }); */
    },
    alert(msg, params) {
        if (typeof (params) == "object" && params) {
            params.distinguishCancelAndClose = true;
        }
        alert(msg, '提示', params || {
            confirmButtonText: '确定',
            distinguishCancelAndClose: true,
            dangerouslyUseHTMLString: true,
        });
    },
  http:function(params) {
      var me = this;
      
      // if (me.urls[params.url]) {
      //     params.url = me.urls[params.url];
      // }
    params.method = (params.method || 'post').toLowerCase();
      // if (params.hostType == 1) {
      //     params.url = me.host1 + params.url;
      // } else if (params.hostType == 'exam') {
      //     params.url = me.hostPaper + params.url;
      // } else {
      //     params.url = me.host + params.url;
      // }
      params.url = me.host + params.url;
    
      var httpTime = new Date().getTime();
      // 请求增加时间入参，清除浏览器缓存
      if (params.url.indexOf('?') != -1) {
          params.url = `${params.url}&t=${httpTime}`;
      } else {
          params.url = `${params.url}?t=${httpTime}`;
      }
      if (!params.data) params.data = {};
      var loading;
      if (params.openLoading) {
          loading = Loading.service({
              body: true,
              lock: true,
          });
      }
      if (params.method == "get") {
          return axios.get(params.url, {
              params: params.data
          }).then(res => {
              loading && loading.close();
              var data = res.data;
              if (data.code) {
                  // if (data.code == 305) {
                  //     //未登录
                  //     me.alert('登录失效', {
                  //         confirmButtonText: '确定',
                  //         callback: action => {
                  //             localStorage.removeItem("isLogin");
                  //             location.reload();
                  //         }
                  //     });
                  //     return;
                  // }
                  if (params.error) {
                      params.error();
                  }
                  me.confirmMsg(data.msg, {
                      confirmButtonClass: 'el-button--danger',
                      showCancelButton: false,
                      dangerouslyUseHTMLString: true,
                  })
              } else {
                  params.success && params.success(data);
              }
              if (params.complete) {
                  params.complete(data);
              }
              return data;
          }).catch(err => {
              loading && loading.close();
              console.error("err", err);
              let err_res = err.response || {};
              console.log('err_res', err_res);
              let msg = err.msg;
              if (err_res.status == 503) {
                  msg = '服务器繁忙，请稍后重试。若多次重试无效，请联系管理员。'
              }
              if (msg) {
                  me.alertMsg({
                      message: msg,
                      type: 'error'
                  });
              }
              if (params.error) {
                  params.error();
              }
              if (params.complete) {
                  params.complete();
              }
          });
      }
      return axios(params).then(res => {
          loading && loading.close();
          var data = res.data;
          if (data.code) {
              if (data.code == 305) {
                  //未登录
                  // me.alert('未登录或登录失效，请重新登录', {
                  //     confirmButtonText: '确定',
                  //     callback: action => {
                  //         localStorage.removeItem("isLogin");
                  //         location.reload();
                  //     }
                  // });
                  // return;
              }
              if (data.mindType == 2) {
                  me.alert(data.msg, {
                      confirmButtonText: '确定'
                  });
              } else if (data.code != 270) {
                  me.alertMsg('错误提示：' + data.msg, 'error');
              }

              if (params.error) {
                  params.error(data);
              }
          } else {
              params.success && params.success(data);
          }
          if (params.complete) {
              params.complete(data);
          }
          return data;
      }).catch(err => {
          loading && loading.close();
          console.error("err", err);
          let err_res = err.response || {};
          let msg = err.msg;
          console.log('err_res', err_res);
          if (err_res.status == 503) {
              msg = '服务器繁忙，请稍后重试。若多次重试无效，请联系管理员。'
          }
          if (msg) {
              me.alertMsg(msg, "error");
          }
          if (params.error) {
              params.error();
          }
          if (params.complete) {
              params.complete();
          }
      });

  },
}


window.config = config;
