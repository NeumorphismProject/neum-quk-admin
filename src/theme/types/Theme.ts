import { Theme as MUITheme } from '@mui/material/styles';
// theme overrides
// import palette from '@/theme/palette';
// import typography from '@/theme/typography';
// import shadows, { customShadows } from '@/theme/shadows';
import { NeumorphismParams, NeumorphismColorMode } from '@/theme/neumorphism';

export type ThemeMode = 'light' | 'dark';

export interface Theme extends Omit<MUITheme, 'palette' | 'shadows' | 'typography'> {
  palette: any;
  shadows: any;
  customShadows: any;
  typography: any;
  neumorphism: (params?: NeumorphismParams) => any;
}

export function getColorModeByThemeMode({ theme }: { theme: Theme }) {
  const { mode } = theme.palette;
  let colorType = 'dark';
  if (mode !== 'dark') {
    colorType = 'main';
  }
  console.log('getColorModeByThemeMode theme = ', theme);
  console.log('getColorModeByThemeMode mode = ', mode);
  console.log('getColorModeByThemeMode colorType = ', colorType);
  return colorType;
}

export interface NeumorphismByThemeModeParams { theme: Theme, neumorphismParams?: NeumorphismParams, mode?: NeumorphismColorMode }
export function getNeumorphismByThemeMode({ theme, neumorphismParams, mode }: NeumorphismByThemeModeParams) {
  let themeMode: ThemeMode = mode || theme.palette.mode;
  const neu = theme.neumorphism(neumorphismParams);
  if (!Object.hasOwnProperty.call(neu, themeMode)) {
    themeMode = 'dark';
  }
  return neu[themeMode];
}
