import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Link from './Link';

// ----------------------------------------------------------------------

export default function ComponentsOverrides() {
  return Object.assign(
    Button(),
    Checkbox(),
    Input(),
    Link()
  );
}
