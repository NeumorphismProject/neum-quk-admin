import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error500() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>抱歉！</h1>
      <h3>您没有权限去该页面...</h3>
      <h3>请联系管理员，或点击下面按钮返回到首页</h3>
      <button type="button" onClick={() => navigate('/')}>
        返回首页
      </button>
    </div>
  );
}
