import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Product from './components/Product'
import {createBrowserRouter , createRoutesFromElements , RouterProvider , Route} from 'react-router-dom'
import DashBoard from './components/DashBoard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<DashBoard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}


