import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Posts from './pages/Posts/Posts'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="max-w-6xl mx-auto items-center justify-center">
      <Navbar/>
      {/* <Posts/> */}
      {/* <LoginPage/> */}
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
