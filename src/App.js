/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import { useDispatch } from 'react-redux';
import { getProducts } from './Redux/features/ProductSlice';
import { Routes, Route } from "react-router-dom";
import Cart from './Cart';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
