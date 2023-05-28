import { useReg } from '../../hooks/useReg';

const Welcome = () => {

  const isReg = useReg();

  return (
    <>
      <div>Welcome</div>
      {
        (isReg.user) ? <a href='/main' className="header-login">Перейти на главную</a> :

          <>
            <a href='/register' className="header-login">Зарегистрироваться</a>
            <a href='/login' className="header-login">Войти</a>
          </>

      }
    </>
  )
}

export default Welcome;