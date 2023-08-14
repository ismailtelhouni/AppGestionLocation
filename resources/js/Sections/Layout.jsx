import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'
const Layout = ({children}) => {
  return (
    <BrowserRouter>
        <Header/>
        <div>
            { children }
        </div>
        <Footer/>
    </BrowserRouter>
  )
}

export default Layout
