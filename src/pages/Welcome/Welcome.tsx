import i18next from 'i18next';
import { t } from 'i18next';
import { useReg } from '../../hooks/useReg';

const Welcome = () => {

  const isReg = useReg();

  return (
    <div className="app-content">
      <div>{t('welcome')}</div>

      <div>
        <h3 className="">Наша команда</h3>

        <ul className="welcome-list">
          <li className="welcome-item">
            <img className="welcome-img" src="https://avatars.githubusercontent.com/u/6607156?v=4" alt="Ксения" />
            <div className="welcome-text">
              <h4>Ксения</h4>
            </div>
          </li>
          <li className="welcome-item">
            <img className="welcome-img" src="https://osipikav-cv.netlify.app/image/photo_2020-05-20_21-26-28.jpg" alt="Андрей" />
            <div className="welcome-text">
              <h4>Андрей</h4>
            </div>
          </li>
          <li className="welcome-item">
            <img className="welcome-img" src="https://avatars.githubusercontent.com/u/85894283?v=4" alt="Евгений" />
            <div className="welcome-text">
              <h4>Евгений</h4>
            </div>
          </li>
        </ul>

      </div>
      {
        (isReg.user) ? <a href='/main' className="header-login">{t('goMain')}</a> :

          <>
            <a href='/register' className="header-login">{t('register')}</a>
            <a href='/login' className="header-login">{t('signin')}</a>
          </>

      }
    </div>
  )
}

export default Welcome;