import React from 'react'
import "./Main.css"
import image1 from "../assets/images/heading.avif"

function Main() {
  return (
    <div>
        <div className='image-section'>
      
          <img className='image' src={image1} alt="heading"></img>
         

         <section className='main-section'>
             <h1>Filip Jovic Jagodina Web Development Success</h1>
             <p>Hello i am Filip jovic, fronEnd developer i can help district businesses create professional, modern and user-friendly web sites. With our reliable developers, we ensure quality and innovative designs from the start to provide customers with an effective online presence.</p>
         </section>
         </div>
    </div>
  )
}

export default Main