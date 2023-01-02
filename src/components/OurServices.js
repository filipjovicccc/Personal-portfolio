import React from "react";
import "./OurServices.css"
import Button from "./Button";


const OurServices =(props)=> {
 
   return (
    <article className="article">
        <img className="images" src={props.item.img} alt="development">

        </img>
        <div className="section">

        <h1>
           {props.item.title}
        </h1>
        </div>
        <p>
            {props.item.description}
        </p>
        <Button>
            More Info
        </Button>
    </article>
   )

}

export default OurServices