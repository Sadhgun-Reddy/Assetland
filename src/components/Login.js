import React, { useState, useCallback } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../utils/firebase';

const providers = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      console.log('Login link sent to:', email);
      // Here you would typically send a login link to the user's email
    }
  }, [email]);

  const handleGoogleSignIn = useCallback(() => {
    console.log('Google Sign-In clicked');

    signInWithPopup(auth, providers)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user,token);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(`Google Sign-In failed: ${errorMessage}`);
        console.error(errorMessage);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Let's get you that home</h2>
        <p className="mb-4 text-gray-600">Sign in to continue to your account</p>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 mb-4 border rounded"
          aria-label="Email address"
        />
        
        <button
          onClick={handleEmailSubmit}
          className="w-full bg-gray-300 text-gray-700 p-2 rounded mb-4 hover:bg-gray-400"
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
          className="w-full border border-gray-300 p-2 rounded flex items-center justify-center"
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
