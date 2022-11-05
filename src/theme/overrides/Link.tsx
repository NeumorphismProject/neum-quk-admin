import { Theme, getNeumorphismByThemeMode } from '@/theme/types/Theme';

export default function Link() {
  return {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({ color: theme.palette.common.white })
      }
    }
  };
}
