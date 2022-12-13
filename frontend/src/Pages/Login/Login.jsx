import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className="center">
    <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                    
                </div>
            </div>

           
            
        </div>
        </div>
  )
}

export default Login