import React, {useState} from 'react'
import "./Header.css"
import Button from './Button'
import {FaFacebook} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"



function Header() {

  return (
    <div className='header'>
      <div className='icons'>
         <FaFacebook />
         <FaInstagramSquare />
         <FaLinkedin />

      </div>
        <h2>Personal portfolio</h2>
        <Button  title="Call us"/>

 

       
    </div>
  )
}

export default Header