
import Layout from '@/layout'
//带头尾组件
export const constantRoutes = [{
  path: '/',
  name: "base",
  component: Layout,
  redirect: '/home',
  //   component: () =>
  //       import ( /* webpackChunkName: "website" */ '../layout')
  // }, // 首页
  children: [{
    path: '/home',
    name: "home",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/home/index')
  },
  // 其他路径重置为home
  {
    path: ':code',
    props: true,
    component: () => import('@/views/home/index'),
    name: 'home',
    meta: { title: '首页' }
  },]
},

]

// 不带头尾组件
export const couponRoutes = [
  {
    path: '/page/first',
    name: "first",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/page/first')
  }, {
    path: '/page/info/:id/:type',
    props: true,
    name: "info",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/page/info')
  }
]
// export const couponRoutes = [{
//   path: '/coupon/home/index',
//   component: () =>
//       import ('~/page/coupon/home/index'),
//   name: 'CouponHome',
//   hidden: true,
//   meta: { title: '首页', icon: 'el-icon-s-management', }
// },
// {
//   path: '/coupon/couponAdmin',
//   name: 'CouponAdmin',
//   hidden: false,
//   component: { render: (e) => e("router-view") }, // 解决父路由无组件
//   meta: { title: '劳动自主用券结算审核' },
//   children: [
//       {
//           path: 'settleIndex',
//           component: () =>
//               import ('~/page/coupon/couponAdmin/settle/index'),
//           name: 'CouponReview',
//           hidden: false,
//           meta: { title: '待审核', icon: 'el-icon-s-management', }
//       }
//   ],
// },
// ]