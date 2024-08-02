import React, { useState } from 'react'
import { getTokenApi } from '../services/api'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user,setUser]=useState({username:"",password:""})

    const navigate=useNavigate()

    async function handleSubmit(event){

        event.preventDefault()

        // console.log(user);

        let res=await getTokenApi(user)

        if(res.status>199 && res.status<300){

            let refreshToken=res.data.refresh

            let accessToken=res.data.access

            // console.log(refreshToken,accessToken);
            // console.log(res.data);

            localStorage.setItem("refresh",refreshToken)
            
            localStorage.setItem("access",accessToken)

            navigate("/index")
        }
        else{
            alert("failed to login")
        }
    }
  return (
    <div>
    <div className='container'>
        <div className="row mt-5">
            <div className="col-2"></div>
            <div className="col-8 border border-2 p-5 shadow rounded">
                <h3 className='text-center fw-bold'>Login</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="">Username</label>
                        <input 
                        type="text" 
                        className="form-control"  
                        placeholder='enter username' 
                        onChange={(e)=>setUser({...user,username:e.target.value})}
                        />
                    </div>
                    <div className="mb-3">

                    <label htmlFor="">Password</label>
                    <input 
                    type="password"  
                    className="form-control" 
                    placeholder='enter password'
                    onChange={(e)=>setUser({...user,password:e.target.value})}

                     />

                    </div>
                    <div className="mb-3">
                        <button type='submit' className='btn btn-info form-control'>Login</button>
                    </div>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Login
