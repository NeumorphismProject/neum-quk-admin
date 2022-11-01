import * as React from 'react';
import _ from 'lodash';
// import styled from 'styled-components';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import PrimarySearchAppBar from '@/components/AppBar';
import Sidebar from '@/components/Sidebar';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
// import { queryMenuThunk } from '@/store/login/slice';
// import { useAppDispatch, useAppSelector } from '@/store/storeHooks';

// const AppContainer = styled('div')(() => ({
//   height: '100vh',
//   width: '100vw'
// }));

// const Content = styled('div')(() => ({
//   height: 'calc(100vh - 84px)',
//   width: '100%',
//   display: 'flex'
// }));

// const OutletWrapper = styled('div')(() => ({
//   flex: 1,
//   height: '100%',
//   backgroundColor: 'white',
//   border: '6px solid #D6E4FF'
// }));

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((state: any) => state.login);

  // const [shrink, setShrink] = React.useState(false);
  // const [selectedNodeId, setSelectedNodeId] = React.useState('');
  // const [selectedChildNodeId, setSelectedChildNodeId] = React.useState('');

  // const shrinkSwitch = React.useCallback(() => {
  //   setShrink((prev: boolean) => !prev);
  // }, [shrink]);

  // // redux api
  // React.useEffect(() => { dispatch(queryMenuThunk()) }, [])

  // // selected menu item by current route url
  // React.useEffect(() => {
  //   console.log('location = ',location)
  //   const currentRoute = location.pathname
  //   setSelectedNodeId(currentRoute)
  //   setSelectedChildNodeId(currentRoute)
  // }, [location])

  // const onSidebarSelected = React.useCallback((selectedItem: ISelectedAppMenuItem) => {
  //   const goPath = selectedItem.childItem ? selectedItem.childItem.routePath : selectedItem.nodeItem.routePath
  //   console.log('goPath = ', goPath)
  //   if (goPath) {
  //     navigate(goPath)
  //   }
  // }, [])

  const handleNavigate = (item: any) => {
    const goPath = item.key;
    console.log('goPath = ', goPath);
    navigate(goPath);
  };

  return (
    <div className="w-full h-full">
      <PrimarySearchAppBar />
      <div className="h-full flex">
        <div className="w-52">
          <Sidebar defaultSelected={location.pathname} menu={menu} onNavigate={handleNavigate} />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      {/* <div className="h-full grid grid-cols-2 divide-x divide-green-500">
        <div className="row-span-1">
          <Sidebar />
        </div>
        <div className="row-span-5">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
}

export default Layout;
