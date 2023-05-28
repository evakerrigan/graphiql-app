import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { logout } from '../../firebase';
import { useReg } from '../../hooks/useReg';
import './Header.css';
import { useState } from 'react';


export const Header = () => {
  const isReg = useReg();
  const [lang, setLang] = useState(true);

  const switcher = (bool: boolean) => {
    setLang(bool);
    console.log('bool', bool);
    bool ? i18next.changeLanguage('ru') : i18next.changeLanguage('en');
    // i18next.changeLanguage(bool ? 'ru' : 'en');
    console.log('bool2', bool)

  };

  const {t} = useTranslation();

  return (
    <div className="header">
      <a className="header-logo" href="./">
        <img src="image/logo.jpg" className="header-img" />
      </a>
      <div className="header-loc">
        <button onClick={() => switcher(true)} className={lang ? 'header-loc-button active' : 'header-loc-button'}>Ru</button>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <button onClick={() => switcher(false)} className={!lang ? 'header-loc-button active' : 'header-loc-button'}>En</button>
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