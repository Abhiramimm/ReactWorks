import React, { useEffect, useState } from 'react'

function Countries({filter}) {
    const [countries,setCountries]=useState()

    async function getCountries(){

        let baseUrl="https://restcountries.com/v2/all/"

        if(filter){
            baseUrl=`https://restcountries.com/v2/name/${filter}?fullText=true`
        }
        
        let response=await fetch(baseUrl)
        
        let data=await response.json()

        setCountries(data)


    }

    useEffect(()=>{
        getCountries()
        console.log("inside country",filter);

    },[filter])
  return (
//     <div>
//    {countries && countries.map((c,i)=>
//    <button key={i}>{c.name}</button>

// )}

//     </div>

<div className="container mt-5">
<div className='row'>

  {countries && countries.map((c, i) =>
    <div className="col-4 mb-3" key={i}>
      <div class="card" style={{ "width": "100%" }}>
        <img src={c.flag} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{c.name}</h5>
        </div>
      </div>
    </div>

  )}


</div>
</div>
  )
}

export default Countries
