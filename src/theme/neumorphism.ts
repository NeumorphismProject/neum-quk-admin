import { ThemeMode } from '@/theme/types/Theme';
import neumorphismBuild, { BORDERRADIUS, NeumorphismStyleParams } from './neumorphism/styleBuilder';

export type NeumorphismType = 'flat' | 'pressed' | 'convex' | 'concave';
export type NeumorphismColorMode = ThemeMode;

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const lightColor = '#2065D1';
const lightCss = neumorphismBuild({ color: lightColor });
const darkColor = '#103996';
const darkCss = neumorphismBuild({ color: darkColor });

export interface NeumorphismParams extends Pick<NeumorphismStyleParams, 'shadowDistance' | 'shadowBlur' | 'borderRadiusVal'> {
}

const neumorphism = (params?: NeumorphismParams) => {
  if (params && (Object.hasOwnProperty.call(params, 'shadowDistance') || Object.hasOwnProperty.call(params, 'shadowBlur'))) {
    const { borderRadiusVal = BORDERRADIUS } = params;
    return {
      borderRadius: pxToRem(borderRadiusVal),
      light: neumorphismBuild({ color: lightColor, ...params }),
      dark: neumorphismBuild({ color: darkColor, ...params })
    };
  }
  const p = params || {};
  const { borderRadiusVal = BORDERRADIUS } = p;
  return {
    borderRadius: pxToRem(borderRadiusVal),
    light: lightCss,
    dark: darkCss
  };
};

export default neumorphism;
