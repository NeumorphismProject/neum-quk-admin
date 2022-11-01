import React from 'react';
import { vi, beforeAll, afterEach, describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import Home from '@/views/Home';

vi.mock('@/locales', () => {
  return {
    useLocale: () => ({
      superHello: 'Hello, { someone } !'
    })
  };
});

describe('view home', () => {
  test('wrapper should include "i18n test"', () => {
    const wrapper = render(<Home />);
    const divEl = wrapper.container.querySelector('[data-testid=wrapper]');
    if (divEl === null) {
      throw new Error('divEl is null');
    }
    expect(divEl.textContent).toContain('i18n test');
  });
});
