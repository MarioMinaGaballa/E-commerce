import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  const { id } = useParams(); 
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); 
        setLoading(false);
      })
  }, [id]);

if(loading){
  return <h2>Loading product...</h2>;
}

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div class="card mb-3" style={{maxWidth:"540px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={product.images} class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <h5 class="card-title">category : {product.category}</h5>
          <p class="card-text">{product.description}</p>
          <p class="card-text">Price : ${product.price}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Details;