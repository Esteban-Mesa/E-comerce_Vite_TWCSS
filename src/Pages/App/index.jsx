import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold text-red-500">
      Hello world!
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders /> 
      <NotFound />
      <SignIn /> 
    </h1>
    </>
  )
}

export default App
