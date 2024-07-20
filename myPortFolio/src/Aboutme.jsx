import React from 'react'

import picture from "./assets/images/profile.jpg"

function Aboutme() {
    return (
        <div>
            <div className="container mt-5" id='aboutme'>

                <div class="card mb-3 border shadow  mx-auto" style= {{"width": "800px"}}>
                    <div class="row g-0">
                        <div class="col-md-4 p-4" style={{"background":"#fcf8f4"}}>
                            <img src={picture} class="rounded-circle object-fit-cover" alt="..." width="200px" height="200px"/>
                            <h2 className='fw-bold text-center'>Maya</h2>
                            <h2 className='fw-bold text-center'>Nelson</h2>
                            <hr className='new4'></hr>
                            <h4 className='text-center'>PROJECT MANAGER</h4>

                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h1 class="card-title fw-bold">Hello</h1>
                                <h4>Here's who I am & what I do</h4>
                                <div className='mt-5'>
                                <a className='btn btn-primary me-3 rounded-pill px-5' href='#resume'>Resume</a>
                                 <a className='btn btn-outline-primary rounded-pill px-5' href='#projects'>Projects</a>


                                  </div>
                                <p class="card-text mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

 

I’m a great place for you to tell a story and let your users know a little more about you.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme
