import i18next from 'i18next';
import { t } from 'i18next';
import { useReg } from '../../hooks/useReg';

const Welcome = () => {

  const isReg = useReg();

  return (
    <div className="app-content">
      <div>{t('welcome')}</div>
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