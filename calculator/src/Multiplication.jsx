import React, { useState } from 'react'

function Multiplication() {

    const [num1,setNum1]=useState(0)

    const [num2,setNum2]=useState(0)

    const [result,setResult]=useState(0)

  return (
    <div>
    <div className='row mt-4'>

        <div className="col-3"></div>
        <div className="col-6 border border-3 rounded shadow p-4 ">
            <h2 className='text-center fw-bold'>Multiplication</h2>
            <div className="mb-3">
                <label htmlFor="">enter number1</label>
                <input type="text" className='form-control' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="">enter number2</label>
                <input type="text" className='form-control' value={num2} onChange={(e)=>setNum2(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="enter number1"></label>
                <button className='btn btn-primary' onClick={()=>setResult((+num1)*(+num2))}>Multiply</button>
            </div>

            <h2>Result : {result}</h2>

        </div>
        <div className="col-3"></div>

    </div>

</div>
  )
}

export default Multiplication
