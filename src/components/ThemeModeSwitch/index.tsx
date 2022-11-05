import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { Theme, ColorModeContext, getNeumorphismByThemeMode } from '@/theme';

export default function ThemeModeSwitch() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const iconSx: any = (theme: Theme) => ({ color: theme.palette.common.white });
  const text = `${theme.palette.mode} mode`;
  return theme.palette.mode === 'dark' ? (
    <Button
      variant="contained"
      onClick={colorMode.toggleColorMode}
      endIcon={<Brightness4Icon sx={iconSx} />}
      sx={[(theme: Theme) => {
        const neumorphismParams = { shadowDistance: '6px', shadowBlur: '6px' };
        const neuObj = getNeumorphismByThemeMode({ theme, neumorphismParams });
        return {
          '&.MuiButton-root': {
            ...neuObj.pressed,
            '&:hover': {
              ...neuObj.flat
            }
          }
        };
      }]}
    >
      {text}
    </Button>
  ) : (
    <Button
      variant="contained"
      onClick={colorMode.toggleColorMode}
      startIcon={<Brightness7Icon sx={iconSx} />}
    >
      {text}
    </Button>
  );
}
