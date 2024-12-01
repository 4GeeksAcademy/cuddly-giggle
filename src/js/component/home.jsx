import React from "react";
import {useState} from "react";

const Home = () => {
    const [ color, setColor] = useState("red");
 
     return (
         <div>
             <div className="palito"></div>
             <div className = "traffic-light">
                 <div onClick={() => setColor("red")} className={"light light-red" + (color === "red" ? " turn-on" : "" )}></div>
                 <div onClick={() => setColor("yellow")} className={"light light-orange" + (color === "yellow" ? " turn-on" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light light-green" + (color === "green" ? " turn-on" : "" )}></div>
             </div>
         </div>
     );
 };

 export default Home;
