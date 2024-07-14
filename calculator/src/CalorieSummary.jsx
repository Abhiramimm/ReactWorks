import React, { useEffect, useState } from 'react'

function CalorieSummary({bmrData}) {

  const [calorie,setCalorie]=useState()
    
    function calculateBmr(){

      let bmr=0
        
      if (bmrData.gender=="male"){
          
       bmr=(10*bmrData.weight)+(6.25*bmrData.height)-(5*bmrData.age)+5
      }
      
      else if (bmrData.gender=="female")
      {

         bmr=(10*bmrData.weight)+(6.25*bmrData.height)-(5*bmrData.age)-161
      }
      
      let calorie=bmr*bmrData.activityLevel

      console.log(calorie);

      setCalorie(calorie)

      console.log(bmrData);
      
      console.log("calling calculate bmr function");

}

useEffect(()=>{
    calculateBmr(),[bmrData]
})

  return (
    <div>
      <h4>You have to consume {calorie} calorie to maintain current weight</h4>
    </div>
  )
}

export default CalorieSummary
