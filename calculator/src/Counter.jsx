import React from 'react'

import { useState } from 'react';

function Counter() {
     /* processing logic */

   //   let counter=0

   const [counter,setCounter]=useState(0) //[state,updateFunction]

     function handleIncrement(){

      setCounter(counter+1)

     }

     function handleDecrement(){

      setCounter(counter-1)


     }

     function handleReset(){

      setCounter(0)

     }


  return (
    /* display logic*/ 

    <div>
        <input type="text"  value={counter}/>

        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter
