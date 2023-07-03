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
    path: 'areaDemo',
    props: true,
    name: "areaDemo",
    component: () =>
      import( /* webpackChunkName: "register" */ '@/views/test/areaDemo.vue')
  }],
}
] 