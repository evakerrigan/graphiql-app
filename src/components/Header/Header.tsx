import { Link, NavLink, Navigate } from 'react-router-dom';
import { logout } from '../../firebase';
import { useReg } from '../../hooks/useReg';
import './Header.css';

export const Header = () => {
  const isReg = useReg();
  console.log('isReg', isReg);
  return (
    <div className="header">
      <a className="header-logo" href="./">
        <img src="image/logo.jpg" className="header-img" />
      </a>
      <div className="header-loc">
        <button className="header-loc-button active">Ru</button>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <button className="header-loc-button">En</button>
      </div>
      <div className="header-wrapper">
        {
          (isReg.user) ? <button onClick={logout} className="header-login">Выйти</button> :
            <>
              <a href='/register' className="header-login">Зарегистрироваться</a>
              <a href='/login' className="header-login">Войти</a>
            </>
        }
      </div>
    </div>
  )
}