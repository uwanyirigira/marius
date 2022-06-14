import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../component/HomeLayout";
import About from "../views/About";
import Tours from "../views/Tours";
import Contact from "../views/contact";
const index=()=>{
    return(
        <HomeLayout>
   <Routes>
       <Route exact path='/' element={<Home></Home>}></Route>
       <Route exact path='/About' element={<About></About>}></Route>
       <Route exact path='/Tours' element={<Tours></Tours>}></Route>
       <Route exact path='/Contact' element={<Contact></Contact>}></Route>
   </Routes>
   </HomeLayout>
    )
}
export default index;