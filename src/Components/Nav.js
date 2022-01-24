import { useState } from "react";
import { NavLink } from "react-router-dom"


export let Nav = () => {

    let [searchId, setUser] = useState();

    const update = (e) => {
        setUser(e.target.value);
        console.log(searchId);
    }
  
    return (
        <section>


    
             <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
       <div className="container">
  
          <NavLink className="navbar-brand"  to="#">Student Managment System</NavLink>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link active"   to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active "    to="/contact">Contact Us</NavLink>
              </li>
              



              <li className="nav-item">
                <NavLink className="nav-link active "    to="/student/showall">Show All</NavLink>
              </li>
          
             
            
              
            </ul>
        
            
                <NavLink className="btn btn-outline-light" to="/student/add">Add Student</NavLink>
              
          </div>
        </div>

      
      </nav>

      <div className="d-flex justify-content-center mt-3">

                <input type="number" onChange={update} value={searchId} placeholder="Enter ID "></input>
                <NavLink to={`/student/search/${searchId}`}> 
                    <button className="btn btn-info mx-2" >Search</button>
                </NavLink>
            </div>
      </section>
            
     
           
       
    )
}