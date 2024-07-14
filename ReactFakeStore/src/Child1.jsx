import React from 'react'

function Child1({setData}) {
    function handleClick(){

        const message="hello"
        
        setData(message)
    }
  return (
    <div>
        <button onClick={handleClick}>Child1Button</button>
      
    </div>
  )
}

export default Child1
