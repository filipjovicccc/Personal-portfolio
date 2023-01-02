import "./App.css"
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import OurServicesList from "./components/OurServicesList";
import services from "./components/data/data-services";
import { useState } from "react";




function App() {
  const [items, setItems] = useState(services)
  return (
    <div >
    <Header />
    <Main />
    <About />
    <OurServicesList items={items} />
    
    </div>
  );
}

export default App;
