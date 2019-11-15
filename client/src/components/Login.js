import React, { useState, useEffect} from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  const [credentials, setCredentials] = useState({
    username: '',
    password:''
  })

  const handleChanges = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

  }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='username'
          onChange={handleSubmit}
          value={credentials.username}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          onChange={handleSubmit}
          value={credentials.password}
        />
      </form>
    </>
  );
};

export default Login;
