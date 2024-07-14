import React, { useEffect, useState } from 'react'

function Products({category}) {

  const [products, setProducts] = useState()

  async function getProducts() {

    let baseUrl="https://fakestoreapi.com/products"

    if(category){
      
      baseUrl=baseUrl+`/category/${category}`
    }

    let response = await fetch(baseUrl)

    let data = await response.json()

    setProducts(data)

  }

  useEffect(() => {
    getProducts()
    console.log("inside product",category);
    
  },[category])

  return (
    <div className="container">
      <div className='row'>

        {products && products.map((p, i) =>
          <div className="col-4">
            <div class="card" style={{ "width": "100%" }}>
              <img src={p.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{p.title}</h5>
                <p class="card-text">{p.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        )}


      </div>
    </div>
  )
}

export default Products

