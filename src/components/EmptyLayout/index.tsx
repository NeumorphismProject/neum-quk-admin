import React from 'react';
import { Outlet } from 'react-router-dom';

function EmptyLayout() {
  return <Outlet />;
}

export default React.memo(EmptyLayout);
