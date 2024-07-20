import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MovieCreate from '../components/MovieCreate'
import MovieSummary from '../components/MovieSummary'

function Index() {
  const [refreshRequired,setrefreshRequired]=useState("")
  return (
    <div>
      <h3>Movie Gallery</h3>
      <Navbar></Navbar>
      <MovieCreate setrefreshRequired={setrefreshRequired}></MovieCreate>
      <MovieSummary refreshRequired={refreshRequired}></MovieSummary>
    </div>
  )
}

export default Index
