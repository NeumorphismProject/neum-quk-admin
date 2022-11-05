import PropTypes from 'prop-types';
import { useState, useMemo, createContext } from 'react';
// material
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
import { ThemeMode } from './types/Theme';
// theme overrides
import palette from './palette';
import typography from './typography';
import shadows, { customShadows } from './shadows';
import neumorphism from './neumorphism';
// components overrides
import componentsOverride from './overrides';

export type { NeumorphismType, NeumorphismColorMode, NeumorphismParams } from './neumorphism';

export * from './types/Theme';
// ----------------------------------------------------------------------

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function ThemeProvider({ children }: any) {
  // get system theme type
  // const mode: ThemeMode = 'light';
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log('prefersDarkMode = ', prefersDarkMode);

  const [mode, setMode] = useState<ThemeMode>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme: any = useMemo(
    () => createTheme({
      neumorphism,
      palette: { ...palette, mode },
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows,
      components: componentsOverride()
    } as any),
    [mode]
  );

  // const theme = createTheme(themeOptions as any);
  // theme.components = componentsOverride(theme as any) as any;

  return (
    <StyledEngineProvider injectFirst>
      <ColorModeContext.Provider value={colorMode}>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </ColorModeContext.Provider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node
};
