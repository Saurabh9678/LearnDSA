// import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
      <div className="loginBox">
        <h2>Login</h2>
        <form >
          <div className="userBox">
            <input type="text" name="" required="" />
            <label>User Name</label>
          </div>
          <div className="userBox">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="buttonFormLogin">
            <a id='loginBtn' href="#">Submit</a>
            <div className="register">
              Don't have an account ?
              <a href="#">Register</a>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login