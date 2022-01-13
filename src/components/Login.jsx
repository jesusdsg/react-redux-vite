import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from '../features/user';

const Login = () => {
  //To Send the action to the reducer
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: 'John', email: 'elwjohn@mail.com', age: 30 }));
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => { handleLogin() }}>Login</button><br />
      <button onClick={() => { dispatch(logout()) }}>Logout</button>
    </div>
  );
}

export default Login;