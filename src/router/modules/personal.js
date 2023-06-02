import Layout from '@/layout'
export const personRoutes = [{
  path: '/personal',
  component: Layout,
  redirect: '/personal/index',
  // hidden: true,
  children: [
    {
      path: '/personal/index',
      component: () => import('@/views/personal/index'),
      name: 'personal',
      // hidden: true,
      meta: { title: '个人中心' }
    },
  ]
}]

