import React, { useState } from 'react'

function Emi() {

 const [emiData,setEmiData]=useState({amount:0,interestRate:0,tenure:0,result:0})

   function calculateEmi(){
        
        let n=emiData.tenure*12

        let r=+emiData.interestRate/12

        let i=+r/100

        let emi=emiData.amount*i*((1+i)**n)/((1+i)**n - 1)

        setEmiData({...emiData,result:emi})
    }

  return (
    <div>
    <div className='row mt-4'>

        <div className="col-3"></div>
        <div className="col-6 border border-3 rounded shadow p-4 ">
            <h2 className='text-center fw-bold'>Emi Calculator</h2>
            <div className="mb-3">
                <label htmlFor="">enter loan amount</label>
                <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,amount:+e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="">enter interest rate</label>
                <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,interestRate:+e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="">enter tenure</label>
                <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,tenure:+e.target.value})}/>
            </div>
            <div className="mb-3">
                <label htmlFor="enter number1"></label>
                <button className='btn btn-primary' onClick={calculateEmi}>Calculate</button>
            </div>
             <h3>EMI : {emiData.result}</h3>
        </div>
        <div className="col-3"></div>

    </div>

</div>
    
  )
}

export default Emi
