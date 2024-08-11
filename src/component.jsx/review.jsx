import { useState } from "react";
export const Review = ({onClick}) =>{
    const [toggle,setToggle]=useState("hide");
    const [isToggle, setIsToggle]=useState(false);

    const togglee =()=>{
        setIsToggle(!isToggle);
        !isToggle?
            setToggle("visible"): setToggle("hide")
    }
     
    return(<>
       <div className={toggle} onClick={togglee}>hello my hajiya maryam

       </div>
       <button onClick={onClick}>call</button>
    </>)
}