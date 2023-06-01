import Vue from 'vue';
import Router from 'vue-router';
import { constantRoutes, couponRoutes } from './routes';

// 解决重复点击相同路由报错Bug，后续版本官方会解决
const routerPush = Router.prototype.push;
Router.prototype.push = function push (location) {
    return routerPush.call(this, location);
    // return routerPush.call(this, location).catch(err => err);
}
const routerReplace = Router.prototype.replace;
Router.prototype.replace = function replace (location) {
    return routerReplace.call(this, location);
    // return routerReplace.call(this, location).catch(err => err);
}

Vue.use(Router);

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes.concat(couponRoutes)
})

const routes = createRouter()
export function resetRouter() {
    const newRouter = createRouter()
    routes.matcher = newRouter.matcher // reset router
}
export default routes