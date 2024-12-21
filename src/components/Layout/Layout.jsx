import React from 'react'
import Header from '../Header/Header'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'

const Layout = () => {
  console.log("layout");
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  )
}

export default Layout
