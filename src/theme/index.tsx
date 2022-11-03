import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import {
  Theme as MUITheme,
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import shadows, { customShadows } from './shadows';
import neumorphism from './neumorphism';

export type { NeumorphismType, NeumorphismColorType } from './neumorphism';

export interface Theme extends Omit<MUITheme, 'palette' | 'shadows' | 'typography'> {
  palette: typeof palette;
  shadows: typeof shadows;
  typography: typeof typography;
  neumorphism: typeof neumorphism;
}

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: any) {
  const themeOptions = useMemo(
    () => ({
      neumorphism,
      palette,
      shape: { borderRadius: 8 },
      typography,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions as any);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node
};
