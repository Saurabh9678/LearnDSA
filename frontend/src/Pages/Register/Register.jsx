import React, { useState, useEffect } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    dispatch(register(user));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [dispatch, navigate, isAuthenticated]);

  return (
    <>
      <div className="signupBox">
        <h2>Sign Up</h2>
        <form encType="multipart/form-data" onSubmit={registerSubmit}>
          <div className="userFormBox">
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={registerDataChange}
            />
            <label>Name</label>
          </div>
          <div className="userFormBox">
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={registerDataChange}
            />
            <label>Email</label>
          </div>
          <div className="userFormBox">
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={registerDataChange}
            />
            <label>Password</label>
          </div>
          <div className="buttonFormRegister">
            <button type="submit" > Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
