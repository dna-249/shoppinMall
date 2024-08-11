import React from 'react'
import './App.css'
import { Fetch } from './component.jsx/fetch'
import{Header} from  './component.jsx/header'
import { Search } from './component.jsx/search'
import { Review } from './component.jsx/review'
import { useState } from 'react'                        
function App() {

  const [toggle,setToggle]=useState("hide");
  const [toggle1,setToggle1]=useState("hide");
  const [toggle2,setToggle2]=useState("hide");
  const [isToggle, setIsToggle]=useState(false);


  const togglee =()=>{
      setIsToggle(!isToggle);
      if(!isToggle)
          {setToggle("visible") ,setToggle1("hide"),setToggle1("hide")}
        else { setToggle("hide"),setToggle1("visible")}
  }
  const togglee1 =()=>{
    setIsToggle(!isToggle);
    if(!isToggle)
        {setToggle1("visible") ,setToggle("hide"),setToggle2("hide")}
      else { setToggle("hide")}
}
const togglee2 =()=>{
  setIsToggle(!isToggle);
  if(!isToggle)
      {setToggle2("visible") ,setToggle("hide"),setToggle1("hide")}
    else { setToggle("hide"),setToggle1("visible")}
}
 
   return (
    <>
      <div>
     <Header 
     togglee={togglee}
     togglee1={togglee1}
     togglee2={togglee2}/>
     </div>

     <div className={toggle}>
    <Search/>
     </div>

     <div className={toggle1} >
     <Fetch />
      </div>

      <div className={toggle2}>
      <Review />
      </div>
    </>
  )
}

export default App
