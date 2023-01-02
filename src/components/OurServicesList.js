
import OurServices from "./OurServices";



const OurServicesList = (props) => {
   

    return (
        <div className="services-list">
        <h1>Hello from services</h1>
         {props.items.map((item) => {
           return <OurServices
              key={item.id}
              item={item}

             />
              
         })}
            
        </div>
    )
}

export default OurServicesList