import React, { useEffect, useState } from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  // const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, navigate, isAuthenticated]);

  return (
    <>
      <div className="loginBox">
        <h2>Login</h2>
        <form>
          <div className="userBox">
            <input
              type="email" 
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <label>User Name</label>
          </div>
          <div className="userBox">
            <input
              type="password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {/* <div className="buttonFormLogin" onSubmit={loginSubmit}>
            <a id="loginBtn" href="/login">
              Submit
            </a>
            <div className="register">
              Don't have an account ?<a href="/register">Register</a>
            </div>
          </div> */}
          <div>
            <button type="submit" onClick={loginSubmit} >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
