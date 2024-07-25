import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import EmployeeCreate from '../components/EmployeeCreate'
import EmployeeSummary from '../components/EmployeeSummary'

function Index() {

  const [refreshRequired,setrefreshRequired]=useState()

  const [employeeId,setEmployeeId]=useState()


  return (
    <div>
      <Navbar></Navbar>
      <EmployeeCreate setrefreshRequired={setrefreshRequired} employeeId={employeeId}></EmployeeCreate>
      <EmployeeSummary refreshRequired={refreshRequired} setEmployeeId={setEmployeeId}></EmployeeSummary>
    </div>
  )
}

export default Index
