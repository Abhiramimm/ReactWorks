import React from 'react'
import profilepicture from "../assets/images/profile.jpg"
import style from "./Profile.module.css"

function Profile({profiletitle}) {
  return (
    <div className={style.container}>
      <div><h1>Profile Title:{profiletitle}</h1></div>
      <div><img src={profilepicture} className={style.containerImage} alt="" /></div>
    </div>
  )
}

export default Profile
