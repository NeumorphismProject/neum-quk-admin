import { useState, useContext, MouseEvent } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Theme, ColorModeContext, getNeumorphismByThemeMode } from '@/theme';
import { localeTextMap, defaultLang, LocaleType, useLocale, LocaleContext } from '@/locales';

export default function LocaleSelector() {
  // const t = useLocale();
  const { lang, setLang } = useContext(LocaleContext);
  const [langText, setLangText] = useState<string>(localeTextMap[defaultLang]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = ({ lang, langText }: { lang: LocaleType | string, langText: string }) => {
    setLang(lang as LocaleType);
    setLangText(langText);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        {langText}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {Object.keys(localeTextMap).map((lang: string) => (
          <MenuItem key={lang} onClick={() => handleItemClick({ lang, langText: localeTextMap[lang as LocaleType] })}>
            {localeTextMap[lang as LocaleType]}
          </MenuItem>))}
      </Menu>
    </div>
  );
}
