import Layout from '@/layout'
//父组件path需要‘/’ 子组件不需要
export const infoRoutes = [
  {
  path: '/info',
  component: Layout,
  redirect: '/info/search',
  // hidden: true,
  props: true,
  name: "info",
  children: [{
    path: 'search',
    props: true,
    name: "infoSearch",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/info/search.vue')
  }],
},
  {
  path: '/page/info/:id/:type',
  props: true,
  name: "infoItem",
  component: () =>
    import( /* webpackChunkName: "register" */ '@/views/info/index.vue')
},

] 