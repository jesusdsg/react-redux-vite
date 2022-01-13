import React from "react";
import { useSelector } from 'react-redux';

const Profile = () => {
  //Getting date from user reducer
  const user = useSelector((state => state.user.value)); 
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
export default Profile;