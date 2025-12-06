import React from "react";
// import "./App.css"
import Toggel from "./Day2/Toggel";
// import ImageProps from "./Day2/ImageProps";
// import TailwindButton from "./Day2/TailwindButton";
// import Cards from "./Cards";
// import FontSize from "./Day2/FontSize";
// import MapProps from "./Day2/MapProps";



function App() {
  const courses = [
    { name: "React", duration: "3 months" },
    { name: "JavaScript", duration: "2 months" },
    { name: "Node.js", duration: "2.5 months" },
    { name: "MongoDB", duration: "1.5 months" }
  ];
  return (
    <>
    {/* <Cards
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
        description="Built Like a Bull"/> */}
        {/* <ImageProps 
         name="MacBook"
         city="Bhopal"
         img="https://images.unsplash.com/photo-1514826786317-59744fe2a548?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlJTIwbWFjfGVufDB8fDB8fHww"
        /> */}

      
      {/* {courses.map((course) => (
        <MapProps name={course.name} duration={course.duration} />
      ))} */}.

      <Toggel/>
    </>
        
  )
}

export default App;
