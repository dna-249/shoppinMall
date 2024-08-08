import { useState } from "react";
export const Review = () =>{
    const [isChange, setIsChange] = useState(false);
     const alert =()=>{
        setIsChange(!isChange);
     }
    return(<>
        <div > ya Rasulillah</div>
     <div>
     <button onClick={alert}>alert</button>
     
        </div>
    </>)
}