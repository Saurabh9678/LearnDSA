import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
       <div className="RegisterContainer">
            <div className="RegisterForm">
                <div className="Head">
                    <h2>Sign Up</h2>
                </div>
                <div className="formName">
                    <form action="/" className="form" method='post'>
                        <input type="text" className="inputForm" placeholder="Enter your Name" />
                        <input type="email" className="inputForm" placeholder="Enter your Email" />
                        <input type="password" className="inputForm" placeholder="Enter your Password" />
                        <button className='registerBtn'>Create an Account</button>
                    </form>

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Register