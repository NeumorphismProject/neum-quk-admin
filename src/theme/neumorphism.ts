export type NeumorphismType = 'flat' | 'pressed' | 'convex' | 'concave';
export type NeumorphismColorType = 'bright' | 'main' | 'dark';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}
const SHADOW_DISTANCE = '20px';
const SHADOW_BLUR = '36px';
const COMMON_BORDERRADIUS = pxToRem(50);
const BRIGHT_COMMON_BOXSHADOW = `${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #b6cfd9,-${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #f6ffff`;
const MAIN_COMMON_BOXSHADOW = `${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #1b56b2,-${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #2574f0`;
const DARK_COMMON_BOXSHADOW = `${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #0e3080,-${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #1242ad`;

const neumorphism = {
  borderRadius: COMMON_BORDERRADIUS,
  bright: {
    flat: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#d6f3ff',
      boxShadow: BRIGHT_COMMON_BOXSHADOW
    },
    pressed: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#d6f3ff',
      boxShadow: `inset ${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #0e3080,inset -${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #1242ad`
    },
    convex: {
      borderRadius: COMMON_BORDERRADIUS,
      background: 'linear-gradient(145deg, #e5ffff, #c1dbe6);',
      boxShadow: BRIGHT_COMMON_BOXSHADOW
    },
    concave: {
      borderRadius: COMMON_BORDERRADIUS,
      background: 'linear-gradient(145deg, #c1dbe6, #e5ffff)',
      boxShadow: BRIGHT_COMMON_BOXSHADOW
    }
  },
  main: {
    flat: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#2065D1',
      boxShadow: MAIN_COMMON_BOXSHADOW
    },
    pressed: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#2065D1',
      boxShadow: `inset ${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #1b56b2,inset -${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #2574f0`
    },
    convex: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundImage: 'linear-gradient(145deg, #226ce0, #1d5bbc)',
      boxShadow: MAIN_COMMON_BOXSHADOW
    },
    concave: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundImage: 'linear-gradient(145deg, #1d5bbc, #226ce0)',
      boxShadow: MAIN_COMMON_BOXSHADOW
    }
  },
  dark: {
    flat: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#103996',
      boxShadow: DARK_COMMON_BOXSHADOW
    },
    pressed: {
      borderRadius: COMMON_BORDERRADIUS,
      backgroundColor: '#103996',
      boxShadow: `inset ${SHADOW_DISTANCE} ${SHADOW_DISTANCE} ${SHADOW_BLUR} #0e3080,inset -${SHADOW_DISTANCE} -${SHADOW_DISTANCE} ${SHADOW_BLUR} #1242ad`
    },
    convex: {
      borderRadius: COMMON_BORDERRADIUS,
      background: 'linear-gradient(145deg, #113da1, #0e3387)',
      boxShadow: DARK_COMMON_BOXSHADOW
    },
    concave: {
      borderRadius: COMMON_BORDERRADIUS,
      background: 'linear-gradient(145deg, #0e3387, #113da1)',
      boxShadow: DARK_COMMON_BOXSHADOW
    }
  }
};

export default neumorphism;
