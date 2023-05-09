import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <a className="header-logo" href="./">
        <img src="image/logo.jpg" className="header-img" />
      </a>
      <button className="header-login">Login</button>
    </div>
  )
}