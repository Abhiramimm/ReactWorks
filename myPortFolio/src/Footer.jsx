import React from 'react'

function Footer() {
    return (
        <div>

            <div>
                <div className="container-fluid border shadow p-5">
                    <div className="row">
                        <div className="col-6">
                            <p>                            © 2035 by Maya Nelson.
                            </p>
                            Powered and secured by Wix

                        </div>
                        <div className="col-6">
                            <div className="ms-auto d-flex justify-content-evenly">
                                <p className='fw-bold'>Call</p>
                                <p>123-456-7890</p>
                                <p className='fw-bold'>Write</p>
                                <a href="" className="me-3 link-underline-light">info@mysite.com</a>
                                <p className='fw-bold'>Follow</p>
                                <a href="" className='link-underline-light'>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    </a>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Footer
