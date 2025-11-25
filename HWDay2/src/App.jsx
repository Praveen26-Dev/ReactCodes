import React from "react";
import "./App.css"
import Cards from "./Cards";

function App() {
  return (
    <div id="container">
      <Cards
        name="Nike Air Max"
        price="₹2999"
        img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=60"
        description="Comfortable and stylish running shoes."
      />
      <Cards
        name="Fastrack Watch"
        price="₹499"
        img="https://images.unsplash.com/photo-1734776579769-4fbfcdd12b6a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc3RyYWNrJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
        description="Style Your Aura"
      />
      <Cards
        name="MacBook"
        price="₹99000"
        img="https://images.unsplash.com/photo-1514826786317-59744fe2a548?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwbWFjfGVufDB8fDB8fHww"
        description="Built Like a Bull"/>
        
    </div>
  );
}

export default App;
