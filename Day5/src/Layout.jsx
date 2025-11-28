import React from 'react'
import { Outlet,Link } from 'react-router-dom'
function Layout() {
  return (
   <>
      <header>
               <div>
                  <h3>LOGO</h3>
               </div>
               <div>
                  <ul>
                      <li><Link to="/"></Link>Home</li>
                      <li> <Link to="/about"></Link>About</li>
                      <li><Link to="/contact"></Link>Contact</li>
                      <li><Link to="/profile"></Link>Profile</li>
                      <li><Link to="/service"></Link>Service</li>
                      
                  </ul>
               </div>
             </header>
             {/* Child Component will appear here*/}
              
              <Outlet/>
             
             <h1>Footer</h1>
      
   
   </>
  )
}

export default Layout