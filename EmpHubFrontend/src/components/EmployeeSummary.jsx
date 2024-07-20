import React, { useEffect, useState } from 'react'
import { employeeListApi } from '../services/api'

function EmployeeSummary() {

  const[employees,setEmployees]=useState()

  async function fetchEmployees(){

    let res=await employeeListApi()

    console.log(res);

    if (res.status>199 && res.status<300){

      setEmployees(res.data)
    }
    else{
      console.log("failed to fecth data from resources");
    }
  }

  
  useEffect(()=>{
    fetchEmployees()
  },[])

  return (
    <div>
       <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="col-8">
              <table className='table'>
                <tr>
                  <th>NAME</th>
                  <th>DEPARTMENT</th>
                  <th>SALARY</th>
                  <th>LOCATION</th>
                  <th>EMAIL</th>
                  <th>ADDRESS</th>
                  <th>PHONE</th>
                  <th>DATEOFJOIN</th>
                  <th>PICTURE</th>
                </tr>
                <tbody>
                  {employees && employees.map((e,i)=>(
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.department}</td>
                      <td>{e.salary}</td>
                      <td>{e.location}</td>
                      <td>{e.email}</td>
                      <td>{e.address}</td>
                      <td>{e.phone}</td>
                      <td>{e.dateofjoin}</td>
                      <td>{e.picture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default EmployeeSummary
