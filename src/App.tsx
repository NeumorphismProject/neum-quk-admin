import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '@/context';
import ThemeProvider from './theme';
import RenderRouter from './routers';

export default function App() {
  const [lang, setLang] = useState('zh-CN');
  const [theme, setTheme] = useState('light');

  const contextVal = { lang, setLang, theme, setTheme };
  const baseRoute = import.meta.env.BASE_URL;
  return (
    <div className="w-screen h-screen">
      <ThemeProvider>
        <GlobalContext.Provider value={contextVal}>
          <BrowserRouter basename={baseRoute}>
            <RenderRouter />
          </BrowserRouter>
        </GlobalContext.Provider>
      </ThemeProvider>
    </div>
  );
}
