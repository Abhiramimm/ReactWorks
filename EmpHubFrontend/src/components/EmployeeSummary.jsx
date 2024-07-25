import React, { useEffect, useState } from 'react'
import { employeeDeleteApi, employeeListApi } from '../services/api'

function EmployeeSummary({ refreshRequired, setEmployeeId }) {

  const [employees, setEmployees] = useState()

  async function handleEmployeeDelete(id){

    console.log(id);

    let res= await employeeDeleteApi(id)

    if(res.status>199 && res.status<300){

      fetchEmployees()
    }

   
  }



  async function fetchEmployees() {

    let res = await employeeListApi()

    console.log(res);

    if (res.status > 199 && res.status < 300) {

      setEmployees(res.data)
    }
    else {
      console.log("failed to fecth data from resources");
    }
  }


  useEffect(() => {
    fetchEmployees()
  }, [refreshRequired])

  return (
    <div>
      <div className="container">
        <h4 className='text-center mb-3'>Employees Summary</h4>
        <div className="row">
          <div className="col-2">

          </div>
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
                <th>Action</th>
              </tr>
              <tbody>
                {employees && employees.map((e, i) => (
                  <tr>
                    <td>{e.name}</td>
                    <td>{e.department}</td>
                    <td>{e.salary}</td>
                    <td>{e.location}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.phone}</td>
                    <td>{e.dateofjoin}</td>
                    <td><img src={e.picture} style={{ width: "200px", height: "200px" }} alt="" /></td>
                    <td className='d-flex gap-2'>
                      <button className='btn btn-outline-danger' onClick={() => handleEmployeeDelete(e.id)}>Delete</button>
                      <button className='btn btn-outline-warning' onClick={() => setEmployeeId(e.id)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeSummary
