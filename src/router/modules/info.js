
// 不带头尾组件
export const infoRoutes = [{
  path: '/page/info/:id/:type',
  props: true,
  name: "info",
  component: () =>
    import( /* webpackChunkName: "register" */ '@/views/page/info')
},
  
]