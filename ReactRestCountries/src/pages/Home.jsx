import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Countries from '../components/Countries'
import Filter from '../components/Filter'

function Home() {
  const [filter,setFilter]=useState()
  return (
    <div>
      <Navbar></Navbar>
     <Filter setFilter={setFilter}></Filter>
     <Countries filter={filter}></Countries>

    </div>
  )
}

export default Home
