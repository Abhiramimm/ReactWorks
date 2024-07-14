import React, { useState } from 'react'

function Bmr() {

    const [bmrData,setBmrData]=useState({height:0,weight:0,gender:0,activityLevel:0,result:0})

    function handleClick(){
        
        let  bmr=0
        
        if (bmrData.gender=="male"){
            
            bmr=(10*bmrData.weight)+(6.25*bmrData.height)-(5*bmrData.age)+5
        }
        
        else if (bmrData.gender=="female")
        {

            bmr=(10*bmrData.weight)+(6.25*bmrData.height)-(5*bmrData.age)-161
        }
        

        // activityLevelValues={"1":1.2,"2":1.375,"3":1.55,"4":1.725,"5":1.9}


        // calorie=bmr*activity_level_values.get(activity_level)

        let calorie=bmr*bmrData.activityLevel

        console.log(calorie);

        setBmrData({...bmrData,result:calorie})



    }


  return (
    <div>
       <div className='row mt-4'>

<div className="col-3"></div>
<div className="col-6 border border-3 rounded shadow p-4 ">
    <h2 className='text-center fw-bold'>Calorie Calculator</h2>
    <div className="mb-3">
        <label htmlFor="">enter height</label>
        <input type="text" className='form-control' onChange={(e)=>setBmrData({...bmrData,height:+e.target.value})} />
    </div>
    <div className="mb-3">
        <label htmlFor="">enter weight</label>
        <input type="text" className='form-control'  onChange={(e)=>setBmrData({...bmrData,weight:+e.target.value})} />
    </div>
    <div className="mb-3">
        <label htmlFor="">enter gender</label>
        <input type="text" className='form-control'  onChange={(e)=>setBmrData({...bmrData,gender:+e.target.value})} />
    </div>
    <div className="mb-3">
        <label htmlFor="">enter age</label>
        <input type="text" className='form-control'  onChange={(e)=>setBmrData({...bmrData,age:+e.target.value})} />
    </div>
    <div className="mb-3">
        <label htmlFor="">enter activity level</label>
        <input type="text" className='form-control'  onChange={(e)=>setBmrData({...bmrData,activityLevel:+e.target.value})} />
    </div>
    <div className="mb-3">
        <label htmlFor="enter number1"></label>
        <button className='btn btn-primary' onClick={handleClick} >Calculate</button>
    </div>
    <h1>BMR :{bmrData.result}</h1>

</div>
<div className="col-3"></div>

</div>

    </div>
  )
}

export default Bmr
