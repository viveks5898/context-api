import React, { useState, useContext } from 'react';
import UserContext from '../context/userContext';

const Login = () => {
  const [user, setUser] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { setUserDetails } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserDetails({ user, userPassword });
  };

  return (
    <div className='pt-8'>
      <div className='flex flex-col gap-9 sm:max-w-80'>
        <input
          type='text'
          className='border p-3'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type='password'
          className='border p-3'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <button
        className='border border-blue-500 text-left'
        onClick={handleSubmit} // Changed to onClick
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
