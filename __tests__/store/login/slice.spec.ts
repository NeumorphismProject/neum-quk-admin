import { vi, beforeAll, afterEach, describe, expect, test } from 'vitest';
import { store } from '@/store/appStore';
import { updateMenu } from '@/store/login/slice';
import { menu } from './mockData';

describe('store slice -- login', () => {
  test('updateMenu', () => {
    expect(store.getState().login.menu).toEqual([]);
    store.dispatch(updateMenu({ menu }));
    expect(store.getState().login.menu).toEqual(menu);
  });
});
