import React from 'react';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './components/Cart'
import Footer from "./components/Footer"
import {Toaster} from 'react-hot-toast'
import './style/mediaquery.scss';


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/cart' element={<Cart/>} />
   </Routes>
   <Footer/>
   <Toaster/>
   </BrowserRouter>
    </>
  );
}

export default App;
