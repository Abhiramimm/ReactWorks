import React from 'react'

function Contact() {
    return (
        <div>

            <div class="card mb-3 border shadow  mx-auto p-5" style={{ "width": "800px" }}>
                <h1 className='text-primary fw-bold text-center mb-2'>Let's talk</h1>
                <form class="contact-form mt-3">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="first-name">First Name *</label>
                            <input type="text" id="first-name" name="first-name" required />
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last Name *</label>
                            <input type="text" id="last-name" name="last-name" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                    </div>
                    <div className='mt-3'>
                    <button className='btn btn-primary me-3 rounded-pill px-5'>SEND</button>

                    </div>
                </form>

        </div>
        </div >
    )
}

export default Contact
