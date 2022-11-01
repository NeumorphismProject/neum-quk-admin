import request from '@/request';

export function queryMenu(params?: any) {
  const menuListUrl = '/menu/list';
  if (params) {
    return request.get(menuListUrl, { params });
  }
  return request.get(menuListUrl);
}
