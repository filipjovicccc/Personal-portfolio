import React from "react";
import "./Footer.css"
import {FaFacebook} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"


const Footer = () => {
     return (
       <footer className="footer">
         {/* <svg width="548" height="200" viewBox="0 0 548 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M427.502 35.8581C581.118 30.215 547.602 75.6796 499.502 96.5769M427.502 35.8581V185.858C372.259 156.645 311.013 122.388 262.189 91.7792M427.502 35.8581C363.132 57.8194 308.512 76.271 262.189 91.7792M499.502 96.5769C470.888 109.008 437.113 112.746 434.502 91.8581C506.63 91.8581 386.303 52.293 440.502 74.2574M499.502 96.5769C470.271 85.9306 451.677 78.7861 440.502 74.2574M440.502 74.2574C93.6068 -41.0287 137.198 13.4206 262.189 91.7792M262.189 91.7792C2.6624 178.664 3.56201 173.161 9.50181 174.858C414.502 185.858 226.876 -2.29965 262.189 91.7792Z" stroke="#DB4747" stroke-width="16"/>
</svg> */}
        <div className="footer-icons">
        <FaFacebook />
         <FaInstagramSquare />
         <FaLinkedin />

        </div>


       

       </footer>
     )
}

export default Footer;