import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => (
    <div className= "footer">
        <Link to='/' className="logo">
            <img alt= "jamie logo" src="/logos/jamie.png"/>        
        </Link>
        <div className="right">
            @JamieUrban { CURRENT_YEAR } all rights reserved.
        </div>

    </div>
)

export default Footer;