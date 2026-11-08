import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleEmailSubmit = useCallback(() => {
    if (!email) {
      setErrorMessage('Please enter an email address.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
      dispatch(addUser({ email: email, displayName: email.split('@')[0], uid: "email-user" }));
      navigate('/transactions');
    }
  }, [email, dispatch, navigate]);

  const handleGoogleSignIn = useCallback(() => {
    dispatch(addUser({ email: "google-test@example.com", displayName: "Google User", uid: "google-123" }));
    navigate('/transactions');
  }, [dispatch, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 sm:w-96">
        <h2 className="text-2xl font-bold mb-6">Let's get you that home</h2>
        <p className="mb-4 text-gray-600">Sign in to continue to your account</p>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Email address"
        />
        
        <button
          onClick={handleEmailSubmit}
          className="w-full bg-pink-500 text-white p-2 rounded mb-4 hover:bg-pink-600 transition-colors"
          aria-label="Continue with your email"
        >
          Continue with your email
        </button>
        
        <p className="text-sm text-center mb-4">We'll send a login link to your email.</p>
        
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full" />
          <span className="px-2 text-xs text-gray-500 whitespace-nowrap">Or connect with</span>
          <hr className="w-full" />
        </div>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 p-2 rounded flex items-center justify-center transition-colors hover:bg-gray-200"
          aria-label="Continue with Google"
        >
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" alt="Google" className="w-6 h-6 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
