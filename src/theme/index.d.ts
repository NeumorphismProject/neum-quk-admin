import { Theme as MUITheme } from '@mui/material/styles'
import palette from './palette'
import shadows, { customShadows } from './shadows'
import typography from './typography'

export interface Theme extends MUITheme {
  palette: palette
  shadows: shadows
  typography: typography
}

declare function ThemeProvider({ children }: {
    children: any;
}): JSX.Element;
declare namespace ThemeProvider {
    namespace propTypes {
        const children: any;
    }
}
export default ThemeProvider;

