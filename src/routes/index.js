import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../component/HomeLayout";
import About from "../views/About";
import Tours from "../views/Tours";
import Contact from "../views/contact";
import DashboardLayout from "../component/DashboardLayout"

import Alltours from "../views/Dashboard/AllTours";
import Creattour from "../views/Dashboard/CreatTour";

const index=()=>{
    return(
        <>
     
        <HomeLayout>
   <Routes>
       <Route exact path='/' element={<Home></Home>}></Route>
       <Route exact path='/About' element={<About></About>}></Route>
       <Route exact path='/Tours' element={<Tours></Tours>}></Route>
       <Route exact path='/Contact' element={<Contact></Contact>}></Route>
       
   </Routes>
   <DashboardLayout>
   <Routes>
   <Route exact path='/Dashboard/Alltours' element={<Alltours></Alltours>}></Route>
       <Route exact path='Dashboard/CreatTour' element={<Creattour></Creattour>}></Route>
       </Routes>
   </DashboardLayout>
   </HomeLayout>
   
   
  
   </>
    )
}
export default index;