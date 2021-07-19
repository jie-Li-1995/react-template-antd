import { lazy } from 'react'
// login
const Login = lazy(() => import('@/views/login'))
const test = lazy(() => import('@/views/te'))
const layout = lazy(() => import('@/views/layout'))
//
const check = lazy(() => import('@/views/check'))
const checkList = lazy(() => import('@/views/check/checkList'))
const CreateCheck = lazy(() => import('@/views/check/createCheck'))
//
const content = lazy(() => import('@/views/content'))
const contentList = lazy(() => import('@/views/content/contentList'))
const createContent = lazy(() => import('@/views/content/createContent'))
//
const role = lazy(() => import('@/views/role'))
const roleList = lazy(() => import('@/views/role/role-list'))
const roleCreate = lazy(() => import('@/views/role/role-create'))

const contextPage = lazy(() => import('@/views/context'))

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
    path: 'context',
    component: contextPage
  },
  {
    path: 'layout',
    component: layout,
    children: [
      {
        path: 'role',
        name: 'role',
        component: role,
        redirect: { name: 'roleList' },
        children: [
          {
            path: 'roleList',
            name: 'roleList',
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            },
            component: roleList
          },
          {
            path: 'roleCreate',
            name: 'roleCreate',
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            },
            component: roleCreate
          },
          {
            path: 'roleEdit/:id',
            name: 'roleEdit',
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            },
            component: roleCreate
          }
        ]
      },
      {
        path: 'check',
        component: check,
        children: [
          {
            path: 'checkList',
            component: checkList,
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            }
          },
          {
            path: 'CreateCheck',
            component: CreateCheck,
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            }
          }

        ]
      },
      {
        path: 'content',
        component: content,
        children: [
          {
            path: 'contentList',
            component: contentList,
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            }
          },
          {
            path: 'createContent',
            component: createContent,
            meta: {
              name: 'role',
              icon: 'ccw-icon19',
              title: 'Role'
            }
          }
        ]
      }
    ]
  }
]

export default routes
