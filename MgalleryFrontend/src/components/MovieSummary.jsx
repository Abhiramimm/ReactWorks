import React, { useEffect, useState } from 'react'
import { movieDeleteApi, movieListApi } from '../services/api'

function MovieSummary({ refreshRequired,setMovieId }) {

  const [movies, setMovies] = useState()


  async function handleMovieDelete(id){

    // console.log(id);

    let res= await movieDeleteApi(id)

    if(res.status>199 && res.status<300){

      fecthMovies()
    }

   
  }

  async function fecthMovies() {

    let res = await movieListApi()
    // console.log(res);

    if (res.status > 199 && res.status < 300) {

      setMovies(res.data)

      // console.log(res.data);
    }


    else {
      console.log("faild to fetch data from resources");
    }

  }

  useEffect(() => {
    fecthMovies()
  }, [refreshRequired])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2">

          </div>
          <div className="col-8">
            <table className="table">
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Runtime</th>
                <th>Year</th>
                <th>Language</th>
                <th>Poster</th>
              <th>Action</th>
              </tr>
              <tbody>
                {movies && movies.map((m, i) => (
                  <tr>
                    <td>{m.title}</td>
                    <td>{m.director}</td>
                    <td>{m.runtime}</td>
                    <td>{m.year}</td>
                    <td>{m.language}</td>
                    <td><img src={m.poster} style={{ width: "200px", height: "200px" }} alt="" /></td>
                    <td className='d-flex gap-2'>
                      <button className='btn btn-outline-danger' onClick={()=>handleMovieDelete(m.id)}>Delete</button>
                      <button className='btn btn-outline-warning' onClick={()=>setMovieId(m.id)}>Edit</button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <div className="col-2">

          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieSummary
