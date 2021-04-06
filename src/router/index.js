import { lazy } from 'react'
// login
const Login = lazy(() => import('@/views/login'))
const test = lazy(() => import('@/views/test'))
const layout = lazy(() => import('@/views/layout'))
//
const check = lazy(() => import('@/views/check'))
const checkList = lazy(() => import('@/views/check/checkList'))
const CreateCheck = lazy(() => import('@/views/check/createCheck'))
//
const content = lazy(() => import('@/views/content'))
const contentList = lazy(() => import('@/views/content/contentList'))
const createContent = lazy(() => import('@/views/content/createContent'))

const routes = [
  {
    exact: true,
    path: 'login',
    component: Login
  },
  {
    path: 'test',
    component: test
  },
  {
    path: 'layout',
    component: layout,
    children: [
      {
        path: 'check',
        component: check,
        children: [
          {
            path: 'checkList',
            component: checkList
          },
          {
            path: 'CreateCheck',
            component: CreateCheck
          }

        ]
      },
      {
        path: 'content',
        component: content,
        children: [
          {
            path: 'contentList',
            component: contentList
          },
          {
            path: 'createContent',
            component: createContent
          }
        ]
      }
    ]
  }
]

export default routes
