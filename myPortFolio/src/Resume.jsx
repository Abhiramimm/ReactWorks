import React from 'react'

function Resume() {
  return (
    <div>
      <div className="container border shadow mx-auto" style= {{"width": "800px"}}>
        <div className="row">
            <div className="col-4 p-5">
                <h3 className='text-primary fw-bold'>2035 - Present</h3>
                <h5>JOB POSITION</h5>
                <p>Company Name</p>
                <p>Company Location</p>

            </div>
            <div className="col-8 p-5">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

 

I’m a great place for you to tell a story and let your users know a little more about you.</p>

            </div>
        </div>
      </div>
      <div className="container border shadow mx-auto mt-3 p-5" style= {{"width": "800px"}}>
        <div className="row">
            <h2>Education</h2>
            <div className="col-4 p-5">
                <h4 className='text-primary fw-bold'>2035 - Present</h4>
                <h5>JOB POSITION</h5>
                <p>Company Name</p>
                <p>Company Location</p>

            </div>
            <div className="col-8 p-5">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

 

I’m a great place for you to tell a story and let your users know a little more about you.</p>

            </div>
        </div>
      </div>
      <div className="container border shadow mx-auto mt-3 p-5" style= {{"width": "800px"}}>
        <div className="row">
            <h1>Professional skillset</h1>
            <div className="col-6 p-5">

            <ul style={{"list-style-type":"square;"}}>
                
                    <li className='mb-3'>Entrepreneurial Mindset</li>
                    <li>Teamwork & Collaboration</li>
                
            </ul >
                
            </div>
            <div className="col-6 py-5">
                <ul style={{"list-style-type":"square;"}}>
                    <li className='mb-3'>Go-to-Market Planning</li>
                    <li>Digital Analytics</li>
                </ul>
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
