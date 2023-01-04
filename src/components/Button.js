import React from 'react'
import "./Button.css"
import {motion} from "framer-motion"

function Button(props) {
  return (
    <motion.button   whileHover={{ scale: 1.2 }}
    whileTap={{
      scale: 0.8,
     

    }} onClick={props.toggleBlock} className='button'>
     {props.title}
    </motion.button>
  )
}

export default Button