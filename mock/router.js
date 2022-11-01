const data = [
  {
    path: '/pad',
    key: '/pad',
    children: [
      {
        path: 'home',
        key: '/pad/home'
      },
    ]
  },
  {
    path: '/error',
    key: '/error',
    title: '错误页面',
    children: [
      {
        path: '404',
        key: '/error/404',
        title: '404页面'
      },
      {
        path: '500',
        key: '/error/500',
        title: '500页面'
      }
    ]
  }
];
export default [
  {
    url: '/api/menu/list',
    type: 'get',
    response() {
      return {
        code: 200, msg: 'success', data: data
      };
    }
  }
];
