import { useState, useEffect } from "react";
export const Fetch =()=>{
    const [task, setTask] = useState([]);
    const [isLoading, setIsLoading] =useState(true);
    const [isError, setIsError] = useState(false);
    const [isPage, setIsPage] =useState(false);
    const [price, setPrice] = useState('');
    

    useEffect(()=>{
        setIsLoading(true);
        setIsError(false);
        
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(apiData => setTask(apiData.products))
        .catch(()=> setIsError(true))
        .finally(()=> setIsLoading(false))
    },[])
    function display1(){
      setIsPage(!isPage);
  }
  function prices(){
    setPrice(()=>
      alert('congratulations'));
  }
   
    return isLoading?(<div className="container5"> Loading...</div>)
     : isError?(<div className="container5"> network is unavailable </div>)
     :( 
     <><div className="container3">
         {task.map((task, index )=>
                      <div  key={index}>
                        <div className={`${isPage ? "container4" : "container2" }`}  onClick={display1}>
            <h7> {task.title} <br/>
          <img width={100} src={task.images[0]}/> <br/>
           <br/>
          </h7>
           </div>            
         </div>)}
        </div>
        
        </>
 )  
}