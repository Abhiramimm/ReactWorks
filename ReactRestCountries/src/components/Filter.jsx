import React, { useEffect, useState } from 'react'

function Filter({setFilter}) {

    const [filters,setFilters]=useState()

    async function filterCountries(){

    let response=await fetch("https://restcountries.com/v2/all/")

    let data=await response.json()

    setFilters(data)



    }

    useEffect(()=>{
        filterCountries()
    },[])
  return (
    <div>

    <div className="container mt-5">
    
    <select name="" id="">
    {filters && filters.map((c, i) =>
      <option value={c.name} key={i}  onClick={(e)=>setFilter(e.target.value)}>{c.name}</option>
    
    )}
      </select>
  
  
  
  </div>
      
    </div>
  )
}

export default Filter
