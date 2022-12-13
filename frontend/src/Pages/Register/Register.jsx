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
                    <form action="/" className="form">
                        <input type="text" className="inputform" placeholder="Enter Your Name" />
                        <input type="email" className="inputform" placeholder="Enter Your Email" />
                        <input type="password" className="inputform" placeholder="Enter Your Password" />
                        <input type="submit" className="submit" value="Create an Account" />
                    </form>

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Register