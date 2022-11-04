import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { SystemStyleObject } from '@mui/system';
import Grid, { GridProps } from '@mui/material/Grid';
import { Theme, NeumorphismType, NeumorphismColorType, NeumorphismParams } from '@/theme';

interface NeumorphismWrapperProps {
  theme?: Theme;
  colortype: NeumorphismColorType;
  type: NeumorphismType;
  shadowdistance?: string;
  shadowblur?: string;
  borderradiusval?: number;
}
const NeumorphismWrapper = styled(Grid)(
  ({
    theme,
    colortype,
    type,
    shadowdistance,
    shadowblur,
    borderradiusval
  }: NeumorphismWrapperProps) => ({
    ...theme!.neumorphism({
      shadowDistance: shadowdistance,
      shadowBlur: shadowblur,
      borderRadiusVal: borderradiusval
    })[colortype][type]
  })
);

export interface INeumorphismPannelProps extends GridProps, NeumorphismParams {
  colorType?: NeumorphismColorType;
  type?: NeumorphismType;
  children?: ReactNode;
}
export default function NeumorphismPannel({
  colorType = 'dark',
  type = 'flat',
  shadowDistance,
  shadowBlur,
  borderRadiusVal,
  children,
  ...props
}: INeumorphismPannelProps) {
  return (
    <NeumorphismWrapper
      colortype={colorType}
      type={type}
      shadowdistance={shadowDistance}
      shadowblur={shadowBlur}
      borderradiusval={borderRadiusVal}
      {...props}
    >
      {children}
    </NeumorphismWrapper>
  );
}
