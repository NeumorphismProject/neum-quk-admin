import { styled } from '@mui/material/styles';
import WebhookIcon from '@mui/icons-material/Webhook';

const HeaderContainer = styled('div')(({ theme }) => ({}));

const HeaderInnerWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
}));

const HeaderItemWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

const HeaderTitle = styled('div')(({ theme }) => ({
  width: '126px',
  textAlign: 'left',
  marginLeft: '14px',
  color: theme.palette.common.black,
  fontWeight: theme.typography.h5.fontWeight,
  fontSize: theme.typography.h5.fontSize
}));

export interface ILogoBoxProps {
  title?: string;
}
export default function LogoBox(props: ILogoBoxProps) {
  const { title } = props;
  return (
    <HeaderContainer>
      <HeaderInnerWrapper>
        <HeaderItemWrapper>
          <WebhookIcon sx={{ fontSize: 36, color: 'rgba(51,102,255,0.8)' }} />
        </HeaderItemWrapper>
        <HeaderItemWrapper>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderItemWrapper>
      </HeaderInnerWrapper>
    </HeaderContainer>
  );
}
