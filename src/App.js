// import { NavBar } from "./components/navbar/NavBar";
// import { Footer } from "./components/footer/Footer";
// import Hero from "./components/hero/Hero";
// import Restaurant from "./components/restaurants/Restaurant";
// import Plates from "./components/plates/Plates";
// import About from "./components/about/About";
// import Login from "./Pages/login/Login";
// import Register from "./Pages/register/Register";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from "./Pages/home/Home";

// function App() {
//   return (
//     <Router>
//       <Home/>
//       <Routes>
//         <Route path="#/" element={<Home/>}/>
//         <Route path="/login" element={<Login />} />
//         {/*<Route path="/register" element={<Register />} />
//         <Route path="/restaurants" element={<Restaurant />} />
//         <Route path="/categories" element={<Plates />} />
//         <Route path="/about" element={<About />} /> */}
//       </Routes>

//     </Router>
//   );
// }

// export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Register from "./Pages/register/Register";
import Restaurant from "./components/restaurants/Restaurant";
import Plates from "./components/plates/Plates";
import About from "./components/about/About";
import Login from "./Pages/login/Login"
import { NavBar } from "./components/navbar/NavBar";
import MenuRestaurants from "./Pages/menuRestaurants/MenuRestaurants";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/menuRestaurants" element={<MenuRestaurants/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}
export default App