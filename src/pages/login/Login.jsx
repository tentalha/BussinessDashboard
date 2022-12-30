import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "./Input";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    if (loginData.username && loginData.password) {
      toast.success("Logged In", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("All fields must be filled!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main_container">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <Input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  label="Username"
                />
              </div>
              <div className="group">
                <Input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  label="Password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" checked />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <button className="button" onClick={handleOnClick}>
                  Sign In
                </button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <Input
                  type="text"
                  name="signupusername"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  label="Username"
                />
              </div>
              <div className="group">
                <Input
                  type="password"
                  name="signuppassword"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  label="Password"
                />
              </div>
              <div className="group">
                <Input
                  type="password"
                  name="signupconfirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  label="Confirm Password"
                />
              </div>
              <div className="group">
                <Input
                  type="text"
                  name="signupemail"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  label="Email Address"
                />
              </div>
              <div className="group">
                <button className="button">Sign Up</button>
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
