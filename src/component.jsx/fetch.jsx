import { useState,useEffect } from "react";
export const Fetch =()=>{
    const [task, setTask] = useState([]);
    const [isLoading, setIsLoading] =useState(true);
    const [isError, setIsError] = useState(false)
    const [isPage1, setIsPage1] =useState(false);
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
    function display(){
        setIsPage1(!isPage1);
    }
    function prices(){
      setPrice(()=>
        alert('congratulations'))
    }
   
    return isLoading?(<div className="container5"> is loading...</div>)
     : isError?(<div className="container5"> network is unavailable </div>)
     :( 
     <><div className="container3">
         {task.map((task, index )=>
                      <ul  key={index}>
                        <div className={`${isPage1 ? "container4":"container2" }`}  onClick={display}>
            <h2> {task.title}</h2> <br/>
          <img width={100} src={task.images[0]}/> <br/>
          {task.description} <br/>
          <button onClick={prices}>price:$ {task.price} </button>
           </div>            
         </ul>)}
        </div>
        
        </>
 )  
}