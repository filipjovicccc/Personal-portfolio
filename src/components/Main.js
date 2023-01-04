import React from 'react'
import "./Main.css"
import developing from "../assets/images/developing.webp"
import {motion} from "framer-motion"


function Main() {

 const titleAnim = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {duration: 2}}
 }

 const container = {
  hidden: {x: 100},
  show: {x: 0},
 }

  return (
    <div>
        <div   animate={{
    x: -28,
    y: 0,
    scale: 1,
    rotate: 0,
  }}  className='image-section'>
      
          <img className='image' src={developing} alt="heading"></img>
         

         <motion.section variants={container} initial="hidden" animate="show" className='main-section'>
             <motion.h1 variants={titleAnim} initial="hidden" animate="show">Filip Jovic Serbia Web Development Success</motion.h1>
             <p>Hello i am Filip jovic, fronEnd developer i can help district businesses create professional, modern and user-friendly web sites. With our reliable developers, we ensure quality and innovative designs from the start to provide customers with an effective online presence.</p>
         </motion.section>
         </div>
         <motion.div

/>
    </div>
  )
}

export default Main