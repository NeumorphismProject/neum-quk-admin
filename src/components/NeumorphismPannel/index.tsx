import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Theme, NeumorphismType, NeumorphismColorType } from '@/theme';

const NeumorphismWrapper = styled(Grid)(
  ({
    theme,
    colorType,
    type
  }: {
    theme?: Theme;
    colorType: NeumorphismColorType;
    type: NeumorphismType;
  }) => ({
    ...theme!.neumorphism[colorType][type]
  })
);

export interface INeumorphismPannelProps {
  colorType?: NeumorphismColorType;
  type?: NeumorphismType;
  className?: string;
  sx?: SxProps;
  children?: ReactNode;
}
export default function NeumorphismPannel({
  colorType = 'dark',
  type = 'flat',
  className,
  sx,
  children
}: INeumorphismPannelProps) {
  return (
    <NeumorphismWrapper className={className} sx={sx} colorType={colorType} type={type}>
      {children}
    </NeumorphismWrapper>
  );
}
