import React, { useState, useCallback } from 'react';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const providers = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleEmailSubmit = useCallback(() => {
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/transactions');
        })
        .catch((error) => {
          setErrorMessage(`Sign-Up failed: ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/transactions');
        })
        .catch((error) => {
          setErrorMessage(`Login failed: ${error.message}`);
        });
    }
  }, [email, password, isSignUp, navigate]);

  const handleGoogleSignIn = useCallback(() => {

    signInWithPopup(auth, providers)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // eslint-disable-next-line
const token = credential.accessToken;
        // eslint-disable-next-line
const user = result.user;
        navigate('/transactions')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(`Google Sign-In failed: ${errorMessage}`);
        console.error(errorMessage);
      });
  }, [navigate]);

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

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Password"
        />
        
        <button
          onClick={handleEmailSubmit}
          className="w-full bg-pink-500 text-white p-2 rounded mb-4 hover:bg-pink-600 transition-colors"
          aria-label={isSignUp ? "Sign Up" : "Sign In"}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-sm text-center mb-4 text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-pink-500 hover:underline focus:outline-none"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
        
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
