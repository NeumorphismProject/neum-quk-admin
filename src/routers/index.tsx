import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
// import { IconDashboard, IconCodeSquare, IconBug, IconMenu } from '@arco-design/web-react/icon';

import LinearProgress from '@mui/material/LinearProgress';
import LayoutPage from '@/components/Layout';
import EmptyLayout from '@/components/EmptyLayout';
// import MultiTwoLayout from '@/views/multi/two/layout';
// import LoadingComponent from '@/compontents/Loading';

import RequireAuth from '@/components/Auth';

// const load = (children: any) => <Suspense fallback={<LoadingComponent />}>{children}</Suspense>;
const load = (children: any) => <Suspense fallback={<LinearProgress />}>{children}</Suspense>;

const Login = lazy(() => import('@/views/Login'));
const Home = lazy(() => import('@/views/Home'));
// const Form = lazy(() => import('@/views/comp/form'));
// const Btn = lazy(() => import('@/views/comp/btn'));
// const LocaleCompontent = lazy(() => import('@/views/comp/locale'));

// const Docs = lazy(() => import('@/views/docs'));
// const One = lazy(() => import('@/views/multi/one'));
// const PageOne = lazy(() => import('@/views/multi/two/page-one'));
// const PageTwo = lazy(() => import('@/views/multi/two/page-two'));
// const Workplace = lazy(() => import('@/views/dashboard/workplace'));
// const Resource = lazy(() => import('@/views/dashboard/resource'));
const Error404 = lazy(() => import('@/views/error/404'));
const Error500 = lazy(() => import('@/views/error/500'));

const requirePublicLayout = () => (
  <RequireAuth>
    <LayoutPage />
  </RequireAuth>
);

const requireEmptyLayout = () => (
  <RequireAuth>
    <EmptyLayout />
  </RequireAuth>
);

const routeList = [
  {
    path: '/',
    key: 'root',
    element: requireEmptyLayout(),
    children: [
      {
        index: true,
        key: 'login',
        element: load(<Login />),
        meta: {
          title: '登录'
        }
      }
    ]
  },
  {
    path: '/pad',
    key: '/pad',
    element: requirePublicLayout(),
    meta: {
      name: 'menu.pad',
      title: '仪表盘'
      // icon: <IconDashboard />
    },
    children: [
      {
        path: 'home',
        key: '/pad/home',
        index: true,
        element: load(<Home />),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/error',
    key: '/error',
    element: requirePublicLayout(),
    meta: {
      name: 'menu.error',
      title: '错误页面'
      // icon: <IconBug />
    },
    children: [
      {
        path: '404',
        key: '/error/404',
        element: load(<Error404 />),
        meta: {
          name: 'menu.error.404',
          title: '404页面'
        }
      },
      {
        path: '500',
        key: '/error/500',
        element: load(<Error500 />),
        meta: {
          name: 'menu.error.500',
          title: '500页面'
        }
      }
    ]
  },
  {
    path: '*',
    key: 'any',
    element: load(<Error404 />)
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export const localRouters = routeList;
export default RenderRouter;
