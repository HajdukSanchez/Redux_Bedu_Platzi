//! Component copied by internet
import React from 'react'
// *Styles
import '../../styles/components/Loader.css'

const Loader = () => {
  return (
    <div className='container'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
