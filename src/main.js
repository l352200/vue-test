import Vue from "vue";
import App from "./App.vue";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";
import router from "./router";
import testRender from "./testRender.vue";
import store from './store'
import '@/styles/index.scss' // global css
//好像这里不引入config 无法全局使用
import config from './config';
import './permission' // permission control
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => {
    if(true) {
      return h(App);
    } else {
      return h(testRender);
    }
  },
  created() {
    window.alertMsg = this.$message;
    window.notify = this.$notify;
    window.confirmMsg = this.$confirm;
    window.alert = this.$alert;
  },
})
