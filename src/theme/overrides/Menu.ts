import { Theme, getNeumorphismByThemeMode } from '@/theme/types/Theme';

export default function Menu() {
  return {
    MuiMenu: {
      styleOverrides: {
        list: ({ theme }: { theme: Theme }) => {
          const neumorphismParams = { shadowDistance: '6px', shadowBlur: '6px', borderRadiusVal: 2 };
          const neuObj = getNeumorphismByThemeMode({ theme, neumorphismParams });
          return {
            ...neuObj.pressed
          };
        }
      }
    }
  };
}
