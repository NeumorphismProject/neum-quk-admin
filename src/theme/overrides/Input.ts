import { Theme } from '@/theme/types/Theme';

export default function Input() {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled }
          }
        }),
        input: ({ theme }: { theme: Theme }) => ({
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          }
        })
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: ({ theme }: { theme: Theme }) => ({
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        })
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.grey[500_12],
          '&:hover': {
            backgroundColor: theme.palette.grey[500_16]
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        }),
        underline: ({ theme }: { theme: Theme }) => ({
          '&:before': {
            borderBottomColor: theme.palette.grey[500_56]
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          borderColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[500_32]
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground
            }
          }
        })
      }
    }
  };
}