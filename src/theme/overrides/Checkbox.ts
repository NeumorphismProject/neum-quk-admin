import { Theme, getNeumorphismByThemeMode } from '@/theme/types/Theme';

export default function Checkbox() {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => {
          const neumorphismParams = { shadowDistance: '2px', shadowBlur: '2px' };
          const neuObj = getNeumorphismByThemeMode({ theme, neumorphismParams });
          return {
            ...neuObj.convex,
            '&:hover': {
              ...neuObj.concave
            }
          };
        }
      }
    }
  };
}
