
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './compoents/About';
import Home from './compoents/Home';
import Products from './compoents/Products';
import NavBar from './compoents/NavBar';
import Details from './compoents/Details';
function App() {
  
  
  return (
    <div className="App">
      <NavBar/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/products/:id" element={<Details/>}/>
    </Routes>
    
    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
