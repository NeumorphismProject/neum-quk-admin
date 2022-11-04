export type NeumorphismType = 'flat' | 'pressed' | 'convex' | 'concave';
export type NeumorphismColorType = 'bright' | 'main' | 'dark';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}
const SHADOW_DISTANCE = '20px';
const SHADOW_BLUR = '36px';
const BORDERRADIUS = 50;
const COMMON_BORDERRADIUS = (borderRadius: number) => pxToRem(borderRadius);
const BRIGHT_COMMON_BOXSHADOW = (shadowDistance: string, shadowBlur: string) =>
  `${shadowDistance} ${shadowDistance} ${shadowBlur} #b6cfd9,-${shadowDistance} -${shadowDistance} ${shadowBlur} #f6ffff`;
const MAIN_COMMON_BOXSHADOW = (shadowDistance: string, shadowBlur: string) =>
  `${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${shadowBlur} #1b56b2,-${shadowDistance} -${shadowDistance} ${shadowBlur} #2574f0`;
const DARK_COMMON_BOXSHADOW = (shadowDistance: string, shadowBlur: string) =>
  `${shadowDistance} ${shadowDistance} ${shadowBlur} #0e3080,-${shadowDistance} -${shadowDistance} ${shadowBlur} #1242ad`;

export interface NeumorphismParams {
  shadowDistance?: string;
  shadowBlur?: string;
  borderRadiusVal?: number;
}

const neumorphism = (params?: NeumorphismParams) => {
  const p = params || {};
  const {
    shadowDistance = SHADOW_DISTANCE,
    shadowBlur = SHADOW_BLUR,
    borderRadiusVal = BORDERRADIUS
  } = p;
  return {
    borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
    bright: {
      flat: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#d6f3ff',
        boxShadow: BRIGHT_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      pressed: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#d6f3ff',
        boxShadow: `inset ${shadowDistance} ${shadowDistance} ${shadowBlur} #0e3080,inset -${shadowDistance} -${shadowDistance} ${shadowBlur} #1242ad`
      },
      convex: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        background: 'linear-gradient(145deg, #e5ffff, #c1dbe6);',
        boxShadow: BRIGHT_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      concave: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        background: 'linear-gradient(145deg, #c1dbe6, #e5ffff)',
        boxShadow: BRIGHT_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      }
    },
    main: {
      flat: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#2065D1',
        boxShadow: MAIN_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      pressed: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#2065D1',
        boxShadow: `inset ${shadowDistance} ${shadowDistance} ${shadowBlur} #1b56b2,inset -${shadowDistance} -${shadowDistance} ${shadowBlur} #2574f0`
      },
      convex: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundImage: 'linear-gradient(145deg, #226ce0, #1d5bbc)',
        boxShadow: MAIN_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      concave: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundImage: 'linear-gradient(145deg, #1d5bbc, #226ce0)',
        boxShadow: MAIN_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      }
    },
    dark: {
      flat: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#103996',
        boxShadow: DARK_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      pressed: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        backgroundColor: '#103996',
        boxShadow: `inset ${shadowDistance} ${shadowDistance} ${shadowBlur} #0e3080,inset -${shadowDistance} -${shadowDistance} ${shadowBlur} #1242ad`
      },
      convex: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        background: 'linear-gradient(145deg, #113da1, #0e3387)',
        boxShadow: DARK_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      },
      concave: {
        borderRadius: COMMON_BORDERRADIUS(borderRadiusVal),
        background: 'linear-gradient(145deg, #0e3387, #113da1)',
        boxShadow: DARK_COMMON_BOXSHADOW(shadowDistance, shadowBlur)
      }
    }
  };
};

export default neumorphism;
