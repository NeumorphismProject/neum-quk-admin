import Button from './Button';
import { Theme } from '@/theme/types/Theme';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme));
}
