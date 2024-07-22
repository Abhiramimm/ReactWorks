import React, { useState, useEffect } from 'react'
import { employeeCreateApi, employeeDetailApi, employeeUpdateApi } from '../services/api';

function EmployeeCreate({setrefreshRequired,employeeId}) {

  const [employee, setEmployee] = useState({ name: "", department: "", salary: "", location: "", email: "", address: "", phone: "", dateofjoin: "", picture: "" })

  useEffect(()=>{
    getEmployeeDetails(employeeId)},
    [employeeId])

    async function getEmployeeDetails(employeeId){

      let res= await employeeDetailApi(employeeId)
  
      // console.log(res.data);
  
      if (res.status>199 && res.status<300){
  
        setEmployee(res.data)
      }
  
  
    }

  async function handleSubmit(event) {

    event.preventDefault()

    // console.log(employee);

    // let res = await employeeCreateApi(employee)

    // console.log(res);

     
    if(employeeId){

      let res= await employeeUpdateApi(employeeId,employee)

    }
    else{
      let res= await employeeCreateApi(employee)
    }


    setrefreshRequired("reload")


  }
  return (
    <div>
      <div>

        <div className="container mb-3">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 border border-3 rounded shadow p-4">
            {employeeId?<h3 className='text-center my-2'>Edit Employee </h3> : <h3 className='text-center my-2'>Add New Employee </h3>
            }              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex gap-1">
                  <div className='w-50'>
                    <label htmlFor="">name</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.name}
                      onChange={(e) => setEmployee({ ...employee, name: e.target.value })}

                    />
                  </div>

                  <div className='w-50'>
                    <label htmlFor="">department</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.department}
                      onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                    />
                  </div>
                </div>
                <div className="mb-3 d-flex gap-1">
                  <div className='w-50'>
                    <label htmlFor="">salary</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.salary}
                      onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                    />
                  </div>

                  <div className='w-50'>
                    <label htmlFor="">location</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.location}
                      onChange={(e) => setEmployee({ ...employee, location: e.target.value })}

                    />
                  </div>
                </div>
                <div className="mb-3  d-flex gap-1">
                  <div className='w-50'>
                    <label htmlFor="">email</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.email}
                      onChange={(e) => setEmployee({ ...employee, email: e.target.value })}

                    />
                  </div>

                  <div className='w-50'>
                    <label htmlFor="">address</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.address}
                      onChange={(e) => setEmployee({ ...employee, address: e.target.value })}

                    />
                  </div>


          
                </div>
                
                <div className="mb-3  d-flex gap-1">
                  <div className='w-50'>
                    <label htmlFor="">phone</label>
                    <input
                      type="text"
                      className='form-control'
                      value={employee.phone}
                      onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}

                    />
                  </div>

                  <div className='w-50'>
                    <label htmlFor="">dateofjoin</label>
                    <input
                      type="date"
                      className='form-control'
                      value={employee.dateofjoin}
                      onChange={(e) => setEmployee({ ...employee, dateofjoin: e.target.value })}

                    />
                  </div>
                  </div>
                  <div className='w-50'>
                    <label htmlFor="">picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      className='form-control'
                      onChange={(e) => setEmployee({ ...employee, picture: e.target.files[0] })}

                    />
                  </div>
                <div className="mt-3">
                {employeeId?<button type='submit'>Edit</button> : <button type='submit'>Add</button>}
                </div>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default EmployeeCreate
