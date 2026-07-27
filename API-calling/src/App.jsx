import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApiCalling from './components/Apicalling';
import ProductDetails from './components/ProductDetails';


const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<ApiCalling/>} />
          {/* Dynamic Routing  */}
          <Route path='/api/:id' element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
