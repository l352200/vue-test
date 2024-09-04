import Layout from '@/layout'
//父组件path需要‘/’ 子组件不需要
export const testRoutes = [
  {
  path: '/test',
  component: Layout,
  redirect: '/test/areaDemo',
  // hidden: true,
  props: true,
  name: "test",
  children: [{
    path: 'demo1',
    props: true,
    name: "demo1",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo1.vue')
  },{
    path: 'demo2',
    props: true,
    name: "demo2",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo2.vue')
  },{
    path: 'demo3',
    props: true,
    name: "demo3",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo3.vue')
  },{
    path: 'demo4',
    props: true,
    name: "demo4",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo4.vue')
  },{
    path: 'demo5',
    props: true,
    name: "demo5",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo5.vue')
  },{
    path: 'demo6',
    props: true,
    name: "demo6",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/demo6.vue')
  },],
}
] 