import React, {useContext, useState} from 'react'

import UserContext from '../context/userContext'
const Profile = () => {

    const {userDetails} = useContext(UserContext)
if(!userDetails)  return "not logged in yet!"
    
    console.log("profile", userDetails)
  return (
    <div>Profile name : {userDetails.user}</div>
  )
}

export default Profile