import { vi, beforeAll, afterEach, describe, expect, test, Mock } from 'vitest';
import request from '@/request';
import { queryMenu } from '@/store/login/api';
import { menu } from './mockData';

vi.mock('@/request', () => {
  return {
    default: {
      get: vi.fn()
    }
  };
});

const axios = request as any;

describe('get menu', () => {
  describe('when API call is successful', () => {
    const menuUrl = '/menu/list';
    test('query without params: should return menu', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: menu }));
      axios.get.mockResolvedValueOnce(menu);
      const result = await queryMenu();
      expect(axios.get).toHaveBeenCalledWith(menuUrl);
      expect(result).toEqual(menu);
    });
    test('query with params: should return menu', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: menu }));
      axios.get.mockResolvedValueOnce(menu);
      const result = await queryMenu({});
      expect(axios.get).toHaveBeenCalledWith('/menu/list', { params: {} });
      expect(result).toEqual(menu);
    });
  });
});
