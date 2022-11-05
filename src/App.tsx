import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { LocaleContext, LocaleType, defaultLang } from '@/locales';
import ThemeProvider from './theme';
import RenderRouter from './routers';

export default function App() {
  const [lang, setLang] = useState<LocaleType>(defaultLang);

  const contextVal = { lang, setLang };
  const baseRoute = import.meta.env.BASE_URL;
  return (
    <ThemeProvider>
      <LocaleContext.Provider value={contextVal}>
        <BrowserRouter basename={baseRoute}>
          <Grid className="w-screen h-screen">
            <RenderRouter />
          </Grid>
        </BrowserRouter>
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}
