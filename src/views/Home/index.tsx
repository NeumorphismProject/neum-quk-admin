import React from 'react';
import { useLocale } from '@/locales';

export default function Home() {
  const t = useLocale();
  return <div data-testid="wrapper">i18n test: {t.superHello.replace('{ someone }', 'XYZ')}</div>;
}
