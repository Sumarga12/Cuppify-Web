import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from './../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // State for popup messages
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState(""); // "success" or "error"

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        // Show success message based on the current state (login or signup)
        setPopupMessage(
          currentState === 'Login' 
            ? "Successfully logged in" 
            : "Successfully signed up"
        );
        setPopupType("success");
        // Automatically close the popup after 2 seconds
        setTimeout(() => {
          setShowLogin(false);
        }, 2000);
      } else {
        // In case of failure, show error message
        setPopupMessage(
          response.data.message || 
          (currentState === 'Login' ? "Wrong username or password" : "Signup failed")
        );
        setPopupType("error");
      }
    } catch (error) {
      console.error("Login error:", error);
      setPopupMessage("An error occurred. Please try again.");
      setPopupType("error");
    }
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
          </div>

          {/* Message popup */}
          {popupMessage && (
            <div className={`popup-message ${popupType}`}>
              {popupMessage}
            </div>
          )}

          <div className="login-popup-inputs">
            {currentState !== 'Login' && (
              <input 
                name="name" 
                onChange={onChangeHandler} 
                value={data.name} 
                type="text" 
                placeholder="Your name" 
                required 
              />
            )}
            <input 
              name="email" 
              onChange={onChangeHandler} 
              value={data.email} 
              type="email" 
              placeholder="Your email" 
              required 
            />
            <input 
              name="password" 
              onChange={onChangeHandler} 
              value={data.password} 
              type="password" 
              placeholder="Password" 
              required 
            />
          </div>
          <button type="submit">
            {currentState === 'Sign Up' ? 'Create account' : 'Login'}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          {currentState === 'Login' ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState('Login')}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
