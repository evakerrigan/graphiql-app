import './Header.css';

export const Header = () => {
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
        <button className="header-login">Зарегистрироваться</button>
        <button className="header-login">Логин</button>
      </div>
    </div>
  )
}