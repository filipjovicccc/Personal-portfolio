import React from "react";
import image2 from "../assets/images/profile-picture.jpg"
import "./About.css"



const About = () => {

    return (
        <div className="about">
         <h1>About</h1>
            <p>
           <img className="profile-image" src={image2} alt="profile-picture"></img>
            I'm excited to introduce my new web development business in Kraljevo - Raška District called Personal portfolio. Our team consists of experienced web developers and designers who create high-quality websites tailored to your needs and wants. We specialize in creating unique and professional portfolios, business websites, and e-commerce stores.
            At Personal portfolio, we strive to provide a personal touch to all our projects. We always collaborate closely with our clients to ensure that their website is exactly what they envisioned. We take pride in our commitment to quality and customer service and are always looking for ways to improve our services. Our talented team of professionals is dedicated to providing exceptional web development services and ensuring that our clients are happy with the results.
            </p>
            
  
       
        </div>
    )

}

export default About