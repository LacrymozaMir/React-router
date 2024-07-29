import React, { useContext } from 'react'
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const Auth = useContext(AuthContext);
    const history = useNavigate();

    const login = (e: React.MouseEvent) => {
        e.preventDefault();
        Auth?.setIsAuth(true);
        localStorage.setItem('auth', 'true');
        history('/');
    }


  return (
    <div>
        <h1>Авторизация</h1>
        <form>
            <input type="text" placeholder='nickname'/>
            <input type="password" placeholder='password'/>
            <button onClick={login}>Войти</button>
        </form>
    </div>
  )
}

export default Login;
