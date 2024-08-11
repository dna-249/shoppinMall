
export const Header =({ togglee, togglee1, togglee2})=>{
    
    return(
        <>
        
        <div className="container">
        <h4>ShoppingMall</h4>
            <ul>
                <li><a onClick={togglee1} href="#">Market</a></li>
                <li><a onClick={togglee} href="#">Search...</a></li>
                <li><a onClick={togglee2} href="#">Review</a></li>
            </ul>
        </div>
        </>
    )
}