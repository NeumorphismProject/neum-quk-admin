import { isValidColor, colorLuminance } from './utils';

export enum NeumorphismShapeType {
  flat = 0,
  pressed = 1,
  concave = 2,
  convex = 3
}
// It seams the angle of shadow
export enum NeumorphismActiveLightSourceType {
  topLeft = 1,
  topRight = 2,
  bottomRight = 3,
  bottomLeft = 4
}
const NEUMORPHISM_SHAPE = NeumorphismShapeType.flat;
const ACTIVE_LIGHT_SOURCE = NeumorphismActiveLightSourceType.topLeft;
const SHADOW_DISTANCE = '20px';
const SHADOW_BLUR = '30px';
export const BORDERRADIUS = 50;

function getActiveLightSource(activeLightSource: NeumorphismActiveLightSourceType, distance: number) {
  switch (activeLightSource) {
    case NeumorphismActiveLightSourceType.topLeft:
      return {
        positionX: distance,
        positionY: distance,
        angle: 145
      };
    case NeumorphismActiveLightSourceType.topRight:
      return {
        positionX: distance * -1,
        positionY: distance,
        angle: 225
      };
    case NeumorphismActiveLightSourceType.bottomRight:
      return {
        positionX: distance * -1,
        positionY: distance * -1,
        angle: 315
      };
    case 4:
      return {
        positionX: distance,
        positionY: distance * -1,
        angle: 45
      };
    default: // NeumorphismActiveLightSourceType.topLeft
      return {
        positionX: distance,
        positionY: distance,
        angle: 145
      };
  }
}

export interface NeumorphismStyleParams {
  color: string // must hexadecimal (means like #FFFFFF)
  neumorphismShape?: NeumorphismShapeType
  activeLightSource?: NeumorphismActiveLightSourceType
  shadowDistance?: string;
  shadowBlur?: string;
  borderRadiusVal?: number;
}
export function getNeumorphismStyle({
  color,
  neumorphismShape = NEUMORPHISM_SHAPE,
  activeLightSource = ACTIVE_LIGHT_SOURCE,
  shadowDistance = SHADOW_DISTANCE,
  shadowBlur = SHADOW_BLUR,
  borderRadiusVal = BORDERRADIUS }: NeumorphismStyleParams) {
  // const
  const maxRadius = 150;
  const colorDifference = 0.15;
  // var
  const shape = neumorphismShape;
  const radius = borderRadiusVal;
  let gradient = false;
  if (shape === 2 || shape === 3) {
    gradient = true;
  }
  const distance = parseInt(shadowDistance.replace('px', ''), 10);
  const { positionX, positionY, angle } = getActiveLightSource(activeLightSource, distance);
  const firstGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 3 ? 0.07 : -0.1) : color;
  const secondGradientColor = gradient && shape !== 1 ? colorLuminance(color, shape === 2 ? 0.07 : -0.1) : color;
  const blur = parseInt(shadowBlur.replace('px', ''), 10);
  const darkColor = colorLuminance(color, colorDifference * -1);
  const lightColor = colorLuminance(color, colorDifference);
  // key code
  const borderRadius = radius >= maxRadius ? '50%' : radius + 'px';
  const background = gradient && shape !== 1
    ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})`
    : `${color}`;
  const boxShadowPosition = shape === 1 ? 'inset' : '';
  const firstBoxShadow = `${boxShadowPosition} ${positionX}px ${positionY}px ${blur}px ${darkColor}`;
  const secondBoxShadow = `${boxShadowPosition} ${positionX * -1}px ${positionY * -1}px ${blur}px ${lightColor}`;

  const styleObj = {
    borderRadius: borderRadius,
    background: background,
    boxShadow: `${firstBoxShadow},${secondBoxShadow}`
  };

  return styleObj;
}

export default function neumorphismBuild(params: Omit<NeumorphismStyleParams, 'neumorphismShape'>) {
  let result = {};
  if (!isValidColor(params.color)) {
    result = {
      flat: {},
      pressed: {},
      convex: {},
      concave: {}
    };
  }
  const flat = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.flat });
  const pressed = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.pressed });
  const convex = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.convex });
  const concave = getNeumorphismStyle({ ...params, neumorphismShape: NeumorphismShapeType.concave });
  result = {
    flat,
    pressed,
    convex,
    concave
  };
  return result;
}