import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import { Theme, ColorModeContext } from '@/theme';
import NeumorphismPannel from '@/components/NeumorphismPannel';

export default function ThemeModeSwitch() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const iconSx: any = (theme: Theme) => ({ color: theme.palette.common.white });
  return (
    <Button
      className="absolute top-4 right-6"
      variant="contained"
      onClick={colorMode.toggleColorMode}
      endIcon={theme.palette.mode === 'dark' ? <Brightness7Icon sx={iconSx} /> : <Brightness4Icon sx={iconSx} />}
    >
      {theme.palette.mode} mode
    </Button>
  );
}
