import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
    <div className="signupBox">
      <h2>Sign Up</h2>
      <form >
        <div className="userFormBox">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div className='userFormBox'>
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div className="userFormBox">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div className="buttonFormRegister">
          <a id='signupBtn' href="/">Submit</a>
        </div>
      </form>
    </div>
  </>
  )
}

export default Register