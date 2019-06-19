 import React from "react";

 import './sideDrawer.css';
 

 const sideDrawer = props => {
     let drawerClasses = 'side-drawer';
     if (props.show){
         drawerClasses='side-drawer open';

     }
     return(
    <nav className={drawerClasses}>  
        <ul>
            <li><a href="/"> Home </a> </li>
            <li><a href="/gallery"> Gallery </a> </li>
            <li><a href="/about"> About </a> </li>
            <li><a href="/jobs"> Jobs </a> </li>
            <li><a href="/contact"> Contact us </a> </li>
        </ul>
    </nav>
    );
 };

 export default sideDrawer;