import React from 'react'
import Header from './Header'
import Footer from './Footer'
const MainLayout = ({children}) => {
  return (
   <>
    <Header/>
    <section className='mx-5'>
        {children}
    <Footer/>
    </section>
   </>
  )
}

export default MainLayout