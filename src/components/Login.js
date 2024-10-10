import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (!email) {
      setErrorMessage('Please enter an email address.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      setErrorMessage('');
      console.log('Login link sent to:', email);
      // Here you would typically send a login link to the user's email
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In clicked');
    // Implement Google Sign-In logic here
  };

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
        />
        
        <button
          onClick={handleEmailSubmit}
          className="w-full bg-gray-300 text-gray-700 p-2 rounded mb-4 hover:bg-gray-400"
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
        >
          <img src="https://www.flaticon.com/free-icons/google" alt="Google" className="w-6 h-6 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};
export default Login;