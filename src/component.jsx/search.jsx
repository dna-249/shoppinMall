import React,{useState,useEffect } from "react";

export const Search =()=>{
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] =useState(true);
  const [isError, setIsError] = useState(false)
  const [search, setSearch] = useState("");
  const [isPage, setIsPage ] =useState(false);
  const [isPage1, setIsPage1 ] =useState(false);
  const [visible, setVisible]=useState("visible");
  const [hidden , setHidden] = useState("hide");
  
  

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
      setIsPage(!isPage);
  }
  function display1(){
    setIsPage1(!isPage1)
       if(!isPage1){
        setVisible('visible'), setHidden("hide")
       }else{ setVisible('hide'), setHidden("visible")}
  }
 
  return isLoading? (<div className="container5"> is loading...</div>)
   : isError?(<div className="container5"> network is unavailable </div>)
   :( 
   <><div className="con-input"><input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search..."/></div><div className="container3">
      
       {task.filter((task)=>{
     return search.toLowerCase() === ''? task : task.title.toLowerCase().includes(search)
   }).map((task, index )=>
                    <div  key={index}>
                      <div className={`${isPage ? "container4":"container2" }`} onClick={display}>
                      <div>
          <h2> {task.title}</h2> <br/>
        <img width={100} src={task.images[0]}/> <br/>
        {task.description} <br/>
         {task.price}
         </div> </div>            
       </div>)}
      </div>
      
      </>
)  
}