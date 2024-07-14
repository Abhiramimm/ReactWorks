import React from 'react'
import style from "./Header.module.css"

function Header() {
    const username="Jane Doe"
  return (
    <div className={style.profileContainer}>
      <h1 className={style.profileTitle}>Hello I'm {username}</h1>
    </div>
  )
}

export default Header
