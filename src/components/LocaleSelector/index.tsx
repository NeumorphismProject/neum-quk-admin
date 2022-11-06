import { useState, useContext, MouseEvent, useEffect, useMemo } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { localeTextMap, defaultLang, LocaleType, LocaleContext } from '@/locales';

function getNewLocales(curLang: string, localeTextMapSource: { [lang in LocaleType]: string }) {
  let newLocalMap: any = { ...localeTextMapSource };
  delete newLocalMap[curLang];
  newLocalMap = { [curLang]: (localeTextMapSource as any)[curLang], ...newLocalMap };
  return newLocalMap;
}

export default function LocaleSelector() {
  const { lang, setLang } = useContext(LocaleContext);
  const [langText, setLangText] = useState<string>(getNewLocales(defaultLang, localeTextMap)[defaultLang]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const localeTexts = useMemo(() => getNewLocales(lang, localeTextMap), [lang]);

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
        {Object.keys(localeTexts).map((lang: string) => (
          <MenuItem key={lang} onClick={() => handleItemClick({ lang, langText: localeTexts[lang as LocaleType] })}>
            {localeTexts[lang as LocaleType]}
          </MenuItem>))}
      </Menu>
    </div>
  );
}
