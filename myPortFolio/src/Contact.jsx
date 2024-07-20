import React from 'react'

function Contact() {
    return (
        <div>

            <div class="card mb-5 border shadow  mx-auto p-5" style={{ "width": "800px" }} id='contact'>
                <h2 className='text-primary fw-bold text-center mb-2'>Let's talk</h2>
                <form class="contact-form mt-3">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="first-name" className='mb-2'>First Name *</label>
                            <input type="text" id="first-name" className='form-control' name="first-name" required />
                        </div>
                        <div class="form-group">
                            <label for="last-name" className='mb-2'>Last Name *</label>
                            <input type="text" id="last-name" className='form-control' name="last-name" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" className='mb-2'>Email *</label>
                        <input type="email" id="email" className='form-control' name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="subject" className='mb-2'>Subject</label>
                        <input type="text" id="subject" className='form-control' name="subject" />
                    </div>
                    <div className='mt-3'>
                    <button className='btn btn-outline-primary me-3 rounded-pill px-5'>SEND</button>

                    </div>
                </form>

        </div>
        </div >
    )
}

export default Contact
