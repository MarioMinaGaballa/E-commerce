import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function Home() {
const [data,setData]=useState({})  
 const [loading, setLoading] = useState(true);
useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res=>res.json())
  .then(product=>{
    setData(product)
  setLoading(false)
})
},[])


if(loading){
  return <h2>Loading product...</h2>;
}


  return (
<div class="container">
  <div className="row g-4">
    {data.products?.map((product, index) => {
      return (
        <div className="col-sm-3" key={product.id}>
          <Cards product={product} />
        </div>
      );
    })}
  </div>
</div>

  )
}

export default Home