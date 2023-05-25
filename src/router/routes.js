export const constantRoutes = [{
  path: '/',
  name: "webSite",
  component: () =>
      import ( /* webpackChunkName: "website" */ '../webSite')
}, // 首页
{
  path: '/page/first',
  name: "first",
  component: () =>
      import ( /* webpackChunkName: "register" */ '@/views/page/first')
}, 
]

//  
export const couponRoutes=[]
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