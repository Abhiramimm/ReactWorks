import React from 'react'
import Header from '../components/Header'
import CustomerCreate from '../components/CustomerCreate'
import CustomerList from '../components/CustomerList'

function Index() {
  return (
    <div>
      <Header></Header>
      <div className='container d-flex justify-content-end my-2'>
      <CustomerCreate></CustomerCreate>

      </div>
      <div className="container">
        <CustomerList></CustomerList>
      </div>
    </div>
  )
}

export default Index
