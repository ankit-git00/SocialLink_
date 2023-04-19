import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Online.css";

export default function Online( {user}) {
  return (
    <li className="friend">
    <div className="profileImgContainer">
    <img src= {user.profilePicture} alt="" className="profileImg" />
    <span className="onlineStatus"></span>
    </div>
    <span className="profileName">{user.username}</span>

    </li>
  )
}
