import React, { useState } from 'react'

function Temperature() {

    const [degree,setDegree]=useState()

    const [fh,setFh]=useState()

  return (
    <div>
        <div className='row mt-4'>

            <div className="col-3"></div>
            <div className="col-6 border border-3 rounded shadow p-4 ">
                <h2 className='text-center fw-bold'>Temperature Conversion</h2>
                <div className="mb-3">
                    <label htmlFor="">Temperature in Degree</label>
                    <input type="text" className='form-control' value={degree} onChange={(e)=>setFh((+e.target.value) *9/5 + 32) }/>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Temperature in Farenheit</label>
                    <input type="text" className='form-control' value={fh} /> 
                </div>
             

            </div>
            <div className="col-3"></div>

        </div>

    </div>
  )
}

export default Temperature
