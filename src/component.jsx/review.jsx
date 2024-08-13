import { useState } from "react";
export const Review = () =>{
    const [toggle3,setToggle3]=useState("hide");
    const [toggle4,setToggle4]=useState("hide");
    const [isToggle, setIsToggle]=useState(false);
 
    function toggleOn(){
    setIsToggle(!isToggle);
            
        if(!isToggle){
            setToggle3('visible'), setToggle4('hide') 
        }else{
            setToggle3('hide'), setToggle4('visible')
        }

}
    
    return(<>
       <div className={toggle3}>hello my hajiya maryam </div>
       <div className={toggle4}> i realy miss you dear</div>

       <button onClick={toggleOn}> toggle</button>
    </>)
}