import React,{useState,useEffect } from "react";

export const Search =()=>{
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] =useState(true);
  const [isError, setIsError] = useState(false)
  const [search, setSearch] = useState("");
  

  useEffect(()=>{
      setIsLoading(true);
      setIsError(false);
      
      

      fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(apiData => setTask(apiData.products))
      .catch(()=> setIsError(true))
      .finally(()=> setIsLoading(false))
  },[])
  function display(event){
      
      event.target.style.width="800px",
      event.target.style.display="block",
      event.target.style.left="0"
  }
 
  return isLoading?(<div > is loading...</div>)
   : isError?(<div className="con-input"> network is unavailable </div>)
   :( 
   <><div className="con-input"><input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search..."/></div><div className="container3">
      
       {task.filter((task)=>{
     return search.toLowerCase() === ''? task: task.title.toLowerCase().includes(search)
   }).map((task, index )=>
                    <ul  key={index}>
                      <div className="container2"  onClick={display}>
          <h2> {task.title}</h2> <br/>
        <img width={200} src={task.images[0]}/> <br/>
        {task.description} <br/>
         {task.price} 
         </div>            
       </ul>)}
      </div>
      
      </>
)  
}