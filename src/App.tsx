import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '@/context';
import RenderRouter from './routers';

export default function App() {
  const [lang, setLang] = useState('zh-CN');
  const [theme, setTheme] = useState('light');

  const contextVal = { lang, setLang, theme, setTheme };
  const baseRoute = import.meta.env.BASE_URL;
  console.log('import.meta.env.BASE_URL = ', baseRoute);
  console.log('import.meta.env.VITE_BASE_URL = ', import.meta.env.VITE_BASE_URL);
  return (
    <div className="w-screen h-screen">
      <GlobalContext.Provider value={contextVal}>
        <BrowserRouter basename={baseRoute}>
          <RenderRouter />
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
