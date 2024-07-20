import React from 'react'
import Navbar from '../components/Navbar'
import EmployeeCreate from '../components/EmployeeCreate'
import EmployeeSummary from '../components/EmployeeSummary'

function Index() {
  return (
    <div>
      <Navbar></Navbar>
      <EmployeeCreate></EmployeeCreate>
      <EmployeeSummary></EmployeeSummary>
    </div>
  )
}

export default Index
