import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Авторизация</h1>
        <form>
            <input type="text" placeholder='nickname'/>
            <input type="password" placeholder='password'/>
            <button>Войти</button>
        </form>
    </div>
  )
}

export default Login;
