import { useTranslation } from 'react-i18next';
import { useReg } from '../../hooks/useReg';
import './Welcome.css';

const Welcome = () => {

  const {t} = useTranslation();

  const isReg = useReg();

  return (
    <div className="app-content">

      <div>
        <h4 className="welcome-page">{t('welcome')}</h4>
        <img className="welcome-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/768px-GraphQL_Logo.svg.png" alt="Логотип GraphQL" />
        <h3 className="welcome-title">Наша команда</h3>

        <ul className="welcome-list">
          <li className="welcome-item">
            <img className="welcome-img" src="https://avatars.githubusercontent.com/u/6607156?v=4" alt="Ксения" />
            <div className="welcome-text">
              <h4 className="welcome-name">Ксения</h4>
            </div>
          </li>
          <li className="welcome-item">
            <img className="welcome-img" src="https://osipikav-cv.netlify.app/image/photo_2020-05-20_21-26-28.jpg" alt="Андрей" />
            <div className="welcome-text">
              <h4 className="welcome-name">Андрей</h4>
            </div>
          </li>
          <li className="welcome-item">
            <img className="welcome-img" src="https://avatars.githubusercontent.com/u/85894283?v=4" alt="Евгений" />
            <div className="welcome-text">
              <h4 className="welcome-name">Евгений</h4>
            </div>
          </li>
        </ul>
        {
          (isReg.user) ? <a href='/main' className="header-login">{t('goMain')}</a> :

            <>
              <a href='/register' className="header-login">{t('register')}</a>
              <a href='/login' className="header-login">{t('signin')}</a>
            </>

        }

      </div>

    </div>
  )
}

export default Welcome;