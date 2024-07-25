import React, { useEffect, useState } from 'react'
import { movieCreateApi, movieDetailApi,movieUpdateApi } from '../services/api'

function MovieCreate({setrefreshRequired,movieId}) {

  const [movie,setMovie]=useState({title:"",year:"",director:"",runtime:"",language:"",poster:""})

  
  useEffect(()=>{
    getMovieDetails(movieId)},
    [movieId])

    async function getMovieDetails(movieId){

    let res= await movieDetailApi(movieId)

    // console.log(res.data);

    if (res.status>199 && res.status<300){

      setMovie(res.data)
    }


  }
  async function handleSubmit(event){

    event.preventDefault()

    // console.log(movie);
     
    if(movieId){

      let res= await movieUpdateApi(movieId,movie)

      setrefreshRequired(Math.random)


    }
    else{
      let res= await movieCreateApi(movie)

          setrefreshRequired(Math.random)

          reSet()

    }

    // console.log(res);



  }

  function reSet(){
      
    setMovie({title:"",year:"",director:"",runtime:"",language:"",poster:null})

  }

  return (
    <div>

      <div>

      <div className="container mb-3">
        <div className="row">
          <div className="col-2">
            
          </div>
          <div className="col-8 border border-3 rounded shadow p-4">
            {movieId?<h3 className='text-center my-2'>Edit Movie </h3> : <h3 className='text-center my-2'>Add New  Movie </h3>
            }
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Title</label>
                  <input 
                  type="text" 
                  className='form-control'
                  value={movie.title}
                  onChange={(e)=>setMovie({...movie,title:e.target.value})}
 
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">director</label>
                  <input 
                  type="text" 
                  className='form-control'
                  value={movie.director}
                  onChange={(e)=>setMovie({...movie,director:e.target.value})}
                   />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">year</label>
                  <input 
                  type="text" 
                  className='form-control' 
                  value={movie.year}
                  onChange={(e)=>setMovie({...movie,year:e.target.value})}
                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Language</label>
                  <input 
                  type="text" 
                  className='form-control' 
                  value={movie.language}
                  onChange={(e)=>setMovie({...movie,language:e.target.value})}

                  />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">runtime</label>
                  <input 
                  type="text" 
                  className='form-control' 
                  value={movie.runtime}
                  onChange={(e)=>setMovie({...movie,runtime:e.target.value})}

                  />
                </div>

                <div className='w-50'>
                  <label htmlFor="">poster</label>
                  <input 
                  type="file" 
                  accept="image/*"
                  className='form-control' 
                  onChange={(e)=>setMovie({...movie,poster:e.target.files[0]})}

                  />
                </div>
              </div>
              <div className="mb-3">
                {movieId?<button type='submit'>Edit</button> : <button type='submit'>Add</button>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


    </div>
    </div>
  )
}

export default MovieCreate
