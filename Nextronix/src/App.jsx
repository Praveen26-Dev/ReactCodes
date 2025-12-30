
import React from 'react'

import AppRoutes from "./routes/AppRoutes";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
   return  (
    <>
     <div className="flex flex-col min-h-screen">
  <Navbar />

  <div className="flex-1">
    <AppRoutes/>
  </div>

  <Footer />
</div>
    </>
          
)
};

export default App;
