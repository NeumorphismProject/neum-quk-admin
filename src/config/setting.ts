/**
 * @description 公共配置文件
 */
export const setting = {
  // 是否开启登录拦截, mock数据的时候可以启用
  loginInterception: true,
  // 默认展开路由
  defaultOpeneds: ['/pad'],
  // token名称
  tokenName: 'accessToken',
  // 标题
  title: 'QUKADMIN',
  // 版权信息
  copyright: '© qukadmin',
  // 路由白名单不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/404', '/401']
};
