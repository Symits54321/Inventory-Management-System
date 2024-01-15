import React from 'react';
import style from './Navbar.module.css';
import { useEffect } from 'react';



import { useMainValue } from '../../maincontext';





import { NavLink, Link, Outlet } from "react-router-dom";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


function Navbar(){

  // const {prodData} = useMainValue();

  // useEffect(()=>{
   
   
  // },[refresh]);

  // useEffect(()=>{
    
    
  // },[]);


 

  

    return(
      <>
        <header> 

          {/*  Buy-Busy Logo */}
        <Link to={``} className={style.logos}>
           Inventory Management System
         </Link>

        

         {/* product btn */}
          <Link to={`/products`} className={style.navbtn}>
          <FontAwesomeIcon icon={faCartPlus} className={style.navicon}/>
           Products
         </Link> 
          
       
          </header>
          <Outlet />
      </>
 
    );
}

export default Navbar;