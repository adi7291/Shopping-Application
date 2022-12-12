import './App.css';
import React from "react"
import Cart from './component/Cart';
import Home from './component/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './component/style.css'
import Contact from './component/Contact';
import About from './component/About';
import ShayredLayout from './component/ShayredLayout';

function App() {
  // debugger;

  const [cart, setCart] = React.useState([])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShayredLayout cart={cart} />} >
          <Route index element={<Home cart={cart} setCart={setCart} />} />
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<h1>Error page Not Found!!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
