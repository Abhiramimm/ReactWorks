import React, { useEffect, useState } from 'react'
import { retrieveCustomerApi } from '../services/api'

function WorkList({custId}) {

    const[works,setWorks]=useState()

    const [workTotal,setWorkTotal]=useState()

    async function fetchCustomerData(custId){

        let res=await retrieveCustomerApi(custId)

        if(res.status>199 && res.status<300){

          setWorks(res.data.works)

          setWorkTotal(res.data.work_total)
          
          // console.log(res.data.works);

          // console.log(res.data.work_total);
        }

    }

    useEffect(()=>{fetchCustomerData(custId)},[])

  return (
    <div className='mt-3 border border-2 border-dark p-3 rounded'>
      <table className='table'>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        <tbody>
          {works && works.map((w,i)=>
         <tr key={i}>
           <td>{w.title}</td>
          <td>{w.description}</td>
          <td>{w.amount}</td>
         </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default WorkList
