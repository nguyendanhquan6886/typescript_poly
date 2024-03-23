// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
// @ts-ignore

import Home from './page/homepage'
import { Routes, Route } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Notfound from './page/notfoun'
import Login from './page/login'
import Banner from './component/banner'
type Props = {}
function App(prop: Props) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/#' element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
