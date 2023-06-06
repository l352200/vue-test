import Layout from '@/layout'
export const personRoutes = [{
  path: '/personal',
  component: Layout,
  redirect: '/personal/index',
  hidden: true,
  children: [
    {
      path: 'management',
      component: () => import('@/views/personal/layout'),
      name: 'personalLayout',
      redirect: '/personal/management/index',
      // hidden: true,
      children: [
        {
          path: 'index',
          component: () => import('@/views/personal/index'),
          name: 'personalIndex',
          // hidden: true,
          meta: { title: '个人中心' },
        },
        {
          path: 'userInfo',
          component: () => import('@/views/personal/userInfo'),
          name: 'personalUserInfo',
          // hidden: true,
          meta: { title: '用户信息' },
        },
        {
          path: 'imgUpload',
          component: () => import('@/views/personal/imgUpload'),
          name: 'personalImgUpload',
          // hidden: true,
          meta: { title: '照片上传' },
        },
        {
          path: 'operateNote',
          component: () => import('@/views/personal/operateNote'),
          name: 'personalOperateNote',
          // hidden: true,
          meta: { title: '操作日志' },
        },
        {
          path: 'article',
          component: () => import('@/views/personal/article'),
          name: 'personalArticle',
          // hidden: true,
          meta: { title: '文章管理' },
        },
      ]
    },
  ]
}]

