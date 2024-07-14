import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='d-flex justify-content-evenly mb-3 bg-warning p-3'>
        <Link to={"counter"}><button className='btn btn-outline-dark'>Counter</button>
        </Link>
        <Link to={"addition"}><button className='btn btn-outline-dark'>Addition</button>
        </Link>
        <Link to={"temperature"}><button className='btn btn-outline-dark'>Temparature</button>
        </Link>

        <Link to={"bmi"}><button className='btn btn-outline-dark'>BMI</button>
        </Link>
        <Link to={"emi"}><button className='btn btn-outline-dark'>EMI</button>
        </Link>
        <Link to={"bmr"}><button className='btn btn-outline-dark'>BMR</button>
        </Link>
        <Link to={"calorie"}><button className='btn btn-outline-dark'>Calorie</button>
        </Link>
    </div>
  )
}

export default Navbar
