import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Products from '../Products'

function Home() {

  const [category,setCategory]=useState("") // used for passing data from category to product
  return (
    <div>
        <Navbar></Navbar>
        <Category setCategory={setCategory}></Category>
        <Products category={category}></Products>
      
    </div>
  )
}

export default Home


