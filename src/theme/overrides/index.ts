import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import { Theme } from '@/theme/types/Theme';

// ----------------------------------------------------------------------

export default function ComponentsOverrides() {
  return Object.assign(Button(), Checkbox(), Input());
}
