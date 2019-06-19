import React from 'react';

import SideDrawer from '../SideDrawer/sideDrawer';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SimpleSlider from '../Widgets/Slider1/slider1';

const Home = () => {
    return(
        <div>
            <DrawerToggleButton/>
            <SideDrawer/>
            <SimpleSlider /> 
            <br/>
            <main>   
                <aside className="words">
                    <h2 className="greet"><i>WELCOME... </i></h2><br/>
                    <p> ...here at Jamie Urban, we aim at achieving smiles, feel free to explore our world of fashion </p>
                </aside>  
            </main>            
        </div>
    )
}
export default Home;