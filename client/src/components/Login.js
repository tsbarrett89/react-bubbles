import React, { useState } from "react";

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
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
    axiosWithAuth().post('/login', credentials)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.payload);
                props.history.push('/BubblePage')
            })
            .catch(err => console.log(err));
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
          onChange={handleChanges}
          value={credentials.username}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChanges}
          value={credentials.password}
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
