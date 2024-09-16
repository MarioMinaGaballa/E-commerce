
import { useParams } from 'react-router-dom'

import FilterCatagory from './FilterCatagory';
function Products() {



  const {id} =useParams();
  console.log(id);


  return (
  <>
  <FilterCatagory/>
  </>
  )
}

export default Products