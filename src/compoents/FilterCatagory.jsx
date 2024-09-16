import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Search from './Search';

function FilterCatagory() {

  const [products, setProducts] = useState([]);
  

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState([0, 500]); 


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); 
        const data = await response.json();
        
        console.log(data); 
        
        setProducts(data.products || []); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); 
  }, []); 


  const filteredProducts = products.filter((product) => {
    return (
      (categoryFilter === "All" || product.category === categoryFilter) &&
      product.price >= priceFilter[0] &&
      product.price <= priceFilter[1]
    );
  });

  return (

    <div className="container m-3 p-0">
   <div className='row g-3'>
    <div className='col-sm-3'>
      <Search />
      <h4>Choose Catagory</h4>
      
  <br />    
      <div>
        <label>Category : </label>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="furniture">furniture</option>
          <option value="groceries">groceries</option>

        </select>
      </div>

<br />
      <div>
        <label>Price Range :  </label>
        <input 
          type="range" 
          min="0" 
          max="500" 
          value={priceFilter[1]} 
          onChange={(e) => setPriceFilter([0, Number(e.target.value)])} 
        />
        <span> {priceFilter[1]}</span>
      </div>
      </div>


    <div className='col-sm-9'>
      <div className='row'>
  {filteredProducts.map((product, index) => (
    <div className='col-sm-4 mb-3' key={product.id}>
      <Cards product={product}  />
    </div>
  ))}
</div>
</div>

     </div>
     </div>
  
  );
};

export default FilterCatagory