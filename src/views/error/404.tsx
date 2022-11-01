import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>抱歉！</h1>
      <h3>当前页面不存在...</h3>
      <h3>请检查您输入的网址是否正确，或点击下面的按钮返回首页</h3>
      <button type="button" onClick={() => navigate('/')}>
        返回首页
      </button>
    </div>
  );
}
