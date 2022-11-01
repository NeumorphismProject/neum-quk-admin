import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routers';
import { GlobalContext } from '@/context';

export default function App() {
  const [lang, setLang] = useState('zh-CN');
  const [theme, setTheme] = useState('light');

  const contextVal = { lang, setLang, theme, setTheme };

  return (
    <div className="w-screen h-screen">
      <GlobalContext.Provider value={contextVal}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <RenderRouter />
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}
