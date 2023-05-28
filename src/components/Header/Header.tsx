// import i18next from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { logout } from '../../firebase';
import { useReg } from '../../hooks/useReg';
import './Header.css';
import { useEffect, useState } from 'react';

interface HeaderProps {
  lang: boolean,
  setLang: Dispatch<SetStateAction<boolean>>,
}

export const Header = ({lang, setLang}: HeaderProps) => {


  const [sticky, setSticky] = useState(false);

  const scrollHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  };

  useEffect(() => {
    scrollHeader();
    return () => window.addEventListener('scroll', scrollHeader);
  }, [sticky]);

  const isReg = useReg();
  // const [lang, setLang] = useState(true);

  // const switcher = (bool: boolean) => {
  //   setLang(bool);
  //   bool ? i18next.changeLanguage('ru') : i18next.changeLanguage('en');
  // };

  const setLangRu = () => {
    setLang(true);
    console.log('lang Ru', lang);
  }
  const setLangEn = () => {
    setLang(false);
    console.log('lang En', lang);
  }

  const {t} = useTranslation();

  return (
    <div className={sticky ? 'header-sticky header' : 'header'}>
      <a className="header-logo" href="./">
        <img src="image/logo.jpg" className="header-img" />
      </a>
      <div className="header-loc">
        <button onClick={setLangRu()} className={lang ? 'header-loc-button active' : 'header-loc-button'}>Ru</button>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <button onClick={setLangEn()} className={!lang ? 'header-loc-button active' : 'header-loc-button'}>En</button>
        {/* <button onClick={() => switcher(true)} className={lang ? 'header-loc-button active' : 'header-loc-button'}>Ru</button>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <button onClick={() => switcher(false)} className={!lang ? 'header-loc-button active' : 'header-loc-button'}>En</button> */}
      </div>
      <div className="header-wrapper">
        {
          (isReg.user) ? <button onClick={logout} className="header-login">{t('signout')}</button> :
            <>
              <a href='/register' className="header-login">{t('register')}</a>
              <a href='/login' className="header-login">{t('signin')}</a>
            </>
        }
      </div>
    </div >
  )
}