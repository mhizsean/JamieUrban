import React, { Component } from "react";
import './header.css';


import Toolbar from '../Navigation/Nav/nav';
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from '../Backdrop/backdrop';

class Header extends Component{
        state = {
            sideDrawerOpen: false
        };
        drawerToggleClickHandler =() => {
            this.setState((prevState) => {
                return {sideDrawerOpen: !prevState.sideDrawerOpen};
            }); 
        };

        backdropClickHandler =() => {
            this.setState({sideDrawerOpen: false});
        };

    render (){
       
        let backdrop;
        if (this.state.sideDrawerOpen) {
       
            backdrop = <Backdrop click= {this.backdropClickHandler}/>
        }
    
        return (
            <header className="header">
                <div className="headerOpt">   </div>
                <div style={{height: '100%'}}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    <SideDrawer show ={this.state.sideDrawerOpen}/>
                    {backdrop}
                    
                </div>
            </header>
        )
        
    
    
    };
      

  
}

export default Header;