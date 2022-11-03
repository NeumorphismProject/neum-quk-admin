import { Theme as MUITheme } from '@mui/material/styles';
// theme overrides
import palette from '@/theme/palette';
import typography from '@/theme/typography';
import shadows, { customShadows } from '@/theme/shadows';
import neumorphism from '@/theme/neumorphism';

export interface Theme extends Omit<MUITheme, 'palette' | 'shadows' | 'typography'> {
  palette: typeof palette;
  shadows: typeof shadows;
  customShadows: typeof customShadows;
  typography: typeof typography;
  neumorphism: typeof neumorphism;
}
