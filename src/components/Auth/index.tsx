import { Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { setting } from '@/config/setting';
// import { setPermission, getUserInfoHandler } from '@/store/actions/user';
import { getCurrentLocaRouter } from '@/utils/router';

const { loginInterception, title } = setting;
export default function Auth({ children }: { children: any }) {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { accessToken, permissions } = useAppSelector((state: any) => state.login);

  const localRouter = getCurrentLocaRouter(pathname);
  // 窗口标题
  document.title = (localRouter ? localRouter.title + '-' : '') + title;

  // 登录状态
  if (accessToken) {
    // 登录状态到登录页自动呢跳转到首页
    if (pathname === '/') return <Navigate to="/pad/home" replace />;

    // 获取权限
    const hasPermissions = permissions && permissions.length;

    if (!hasPermissions) {
      // let permissionData;

      try {
        if (!loginInterception) {
          // settings.js loginInterception为false时，创建虚拟权限
          // dispatch(
          //   setPermission(['admin'], (data: any) => {
          //     permissionData = data;
          //   })
          // );
        } else {
          // dispatch(
          //   getUserInfoHandler((data: any) => {
          //     // eslint-disable-next-line no-unused-vars
          //     permissionData = data;
          //   })
          // );
        }
      } catch {
        console.log(22);
      }
    }

    return children;
  }
  if (pathname !== '/') return <Navigate to="/" replace />;
  return children;
}
