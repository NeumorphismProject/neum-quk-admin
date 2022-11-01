import { useContext } from 'react';
import { GlobalContext } from '@/context';
import zh_CN from './zh_CN';
import en_US from './en_US';

const i18n = { 'zh-CN': zh_CN, 'en-US': en_US };

export function useLocale(locale: any = null) {
  const { lang } = useContext(GlobalContext);
  return (locale || i18n)[lang] || {};
}
