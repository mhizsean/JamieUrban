import React from'react';

import DrawerToggleButton from '../../SideDrawer/DrawerToggleButton';
import './nav.css'

const toolbar = props => (
    <header className= "nav">
        <nav className= "nav_navigation">
            <div className= "nav__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
             <div className="nav_logo"><a href="/"> 
            <img alt= "jamie logo" src="/logos/jamie.png"/>
            </a></div>
            <div className= "spacer"/>
            <div className=" nav_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;

