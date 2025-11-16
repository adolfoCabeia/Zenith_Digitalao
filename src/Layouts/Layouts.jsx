import React from 'react'
import Header from './Header'
import FooterMinimal from './Footer'

const Layouts = ({children}) => {
  return (
    <>
    
      <Header/>
      {children}
      <FooterMinimal/>
    </>
  )
}

export default Layouts