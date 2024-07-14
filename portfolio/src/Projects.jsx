import React from 'react'

function Projects() {

    const works=["CRUD","ServiceCenter","Mhub"]
  return (
    <div>
        <h1>Projects</h1>
        <ol>
            {works.map((w,i)=><li key={i}>{w}</li>)}
        </ol>
      
    </div>
  )
}

export default Projects
