import { Theme } from '@/theme/types/Theme';
// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            // boxShadow: 'none'
            ...theme.neumorphism().dark.concave
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400]
          }
        },
        containedPrimary: {
          // boxShadow: theme.customShadows.primary
          ...theme.neumorphism().dark.convex
        },
        containedSecondary: {
          // boxShadow: theme.customShadows.secondary
          ...theme.neumorphism().dark.convex
        },
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover
          }
        }
      }
    }
  };
}
