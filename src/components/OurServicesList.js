
import OurServices from "./OurServices";
import "./OurServicesList.css"



const OurServicesList = (props) => {
   

    return (
        <div className="services-list">
        <h1>Hello from services</h1>
    
      <div className="services">

         {props.items.map((item) => {
           return <OurServices
              key={item.id}
              item={item}

             />
              
         })}


        </div>
            
        </div>
    )
}

export default OurServicesList