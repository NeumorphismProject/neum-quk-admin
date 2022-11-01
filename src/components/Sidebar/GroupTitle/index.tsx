import Typography from '@mui/material/Typography';
import { Theme } from '@/theme';

export interface IGroupTitleProps {
  title?: string;
  caption?: string;
}
export default function GroupTitle(props: IGroupTitleProps) {
  const { title, caption } = props;
  return (
    <>
      <Typography
        sx={(theme: Theme) => ({
          ml: theme.spacing(2),
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.grey[700]
        })}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={(theme: Theme) => ({
          ...theme.typography.caption,
          ml: theme.spacing(2),
          color: theme.palette.grey[600]
        })}
        display="block"
        gutterBottom
      >
        {caption}
      </Typography>
    </>
  );
}
