import React, { useEffect, useState } from 'react'

function Category({setCategory}) {

    const [categories,setCategories]=useState()

    function getCategories(){

        fetch("https://fakestoreapi.com/products/categories").
        then(res=>res.json()).
        then(data=>setCategories(data))

        // async function getCategories(){

        // let response=await fetch("https://fakestoreapi.com/products/categories")
        // let data= await response.json()
        // console.log(data)  
        // }used to avoid promise chaining
    }

    useEffect(()=>{
        getCategories(),[]
    })
  return (
    <div className='d-flex justify-content-evenly mt-5'>
      {categories && categories.map((c)=><div>
        <button className='btn btn-outline-dark mb-3' value={c} onClick={(e)=>setCategory(e.target.value)}>{c}</button>
      </div>)}
    </div>
  )
}

export default Category

