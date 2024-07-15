import React from 'react'

import picture from "./assets/images/cake.webp"

function Projects() {
    return (
        <div>
            <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>Projectname 01</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.



                                I’m a great place for you to tell a story and let your users know a little more about you.</p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>Projectname 02</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.



                                I’m a great place for you to tell a story and let your users know a little more about you.</p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-5">

                <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <h4 className='text-primary fw-bold'>Projectname 03</h4>
                            <p className='fw-bold'>Role title</p>

                            <p class="card-text mt-4">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.



                                I’m a great place for you to tell a story and let your users know a little more about you.</p>

                        </div>
                        <div class="col-md-4">
                            <div class="card-body">

                                <img src={picture} class="img-fluid" alt="..." />




                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
