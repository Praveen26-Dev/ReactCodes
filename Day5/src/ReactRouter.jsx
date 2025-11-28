import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Navbar from './Navbar'
import Tailwind from './Tailwind'
import App from './App'
const ReactRouter = () => {
  return (
    /*main.jsx =>  <BrowserRouter></BrowserRouter> ye tag hoga*/
    /* App.jsx (ReactRouter.jsx) =>Routes , Route*/
    /*Layout.jsx => Outlet , link*/
    <>
       <Routes>
           <Route path='/' element={<Layout/>}>
            {/* <Route index element={<Home/>}></Route> */}
              <Route path='/about' element={<Navbar/>}></Route>
              <Route path='/service' element={<Tailwind/>}></Route>
              <Route path='/contact' element={<App/>}></Route>
           
           </Route>

       </Routes>
    </>
  )
}

export default ReactRouter