import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Grid, { GridProps } from '@mui/material/Grid';
import { Theme, getNeumorphismByThemeMode, NeumorphismType, NeumorphismColorMode, NeumorphismParams } from '@/theme';

interface NeumorphismWrapperProps {
  theme?: Theme;
  thememode?: NeumorphismColorMode;
  type: NeumorphismType;
  shadowdistance?: string;
  shadowblur?: string;
  borderradiusval?: number;
}
const NeumorphismWrapper = styled(Grid)(
  ({
    theme,
    thememode,
    type,
    shadowdistance,
    shadowblur,
    borderradiusval
  }: NeumorphismWrapperProps) => {
    const neumorphismParams = {
      shadowDistance: shadowdistance,
      shadowBlur: shadowblur,
      borderRadiusVal: borderradiusval
    };
    const neuObj = getNeumorphismByThemeMode({ theme: theme!, neumorphismParams, mode: thememode });
    return {
      ...neuObj[type]
    };
  }
);

export interface INeumorphismPannelProps extends GridProps, NeumorphismParams {
  colorMode?: NeumorphismColorMode;
  type?: NeumorphismType;
  children?: ReactNode;
}
export default function NeumorphismPannel({
  colorMode,
  type = 'flat',
  shadowDistance,
  shadowBlur,
  borderRadiusVal,
  children,
  ...props
}: INeumorphismPannelProps) {
  return (
    <NeumorphismWrapper
      thememode={colorMode}
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
