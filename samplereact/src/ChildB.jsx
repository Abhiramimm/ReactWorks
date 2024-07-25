import React, { useContext } from 'react'
import ChildC from './ChildC'
import MessageContext from './MyContext'

function ChildB() {
    const message=useContext(MessageContext)
  return (
    <div>
        <h1>Child B</h1>
        {message}
      <ChildC></ChildC>
    </div>
  )
}

export default ChildB
