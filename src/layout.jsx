import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
import './index.css'
function layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export default layout
