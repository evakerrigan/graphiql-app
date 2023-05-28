import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { useReg } from "../../hooks/useReg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const isReg = useReg();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/main");
  }, [user, loading]);


  // async const authTrue = () => {
  //   console.log('проверка на запуск isReg.user', isReg.user);
  //   await signInWithEmailAndPassword(auth, email, password);
  //   if (isReg.user) navigate("/main");
  // }
  const authTrue = async () => {
    console.log('проверка на запуск isReg.user', isReg.user);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('user', user)
      if (user) navigate("/main");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          // onClick={authTrue}
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          Login
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;