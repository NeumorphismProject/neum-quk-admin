import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { GlobalContext } from '@/context';
import ThemeProvider, { Theme } from './theme';
import RenderRouter from './routers';

export default function App() {
  const [lang, setLang] = useState('zh-CN');
  const [theme, setTheme] = useState('light');

  const contextVal = { lang, setLang, theme, setTheme };
  const baseRoute = import.meta.env.BASE_URL;
  return (
    <ThemeProvider>
      <GlobalContext.Provider value={contextVal}>
        <BrowserRouter basename={baseRoute}>
          <Grid className="w-screen h-screen">
            <RenderRouter />
          </Grid>
        </BrowserRouter>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
