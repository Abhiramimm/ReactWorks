import React from 'react'

function Nav() {
  return (
    <div>
         <div>
        <div className="container-fluid border shadow p-5">
    <div className="row">
      <div className="col-8">
      <i class="fa-solid fa-square" style={{"color":"blue"}}></i>
      <span className='fw-bold fs-3'> Maya Nelson</span><span> / PROJECT MANAGER</span>

      </div>
      <div className="col-4">
      <div className="">
            <a href="#aboutme" className="me-3 text-decoration-none">ABOUT ME</a>
            <a href="#resume" className="me-3 text-decoration-none">RESUME</a>
            <a href="#projects" className="me-3 text-decoration-none">PROJECTS</a>
            <a href="#contact" className="text-decoration-none">CONTACT</a>
        </div>
    </div>
      </div>
        
       </div>



      
    </div>
    </div>
  )
}

export default Nav
