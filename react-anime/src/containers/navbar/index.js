import React from 'react';
import Brand from './brand'
import './styles.css';

const Navbar = ({children}) => {
    return (
        <div className="navbar">
            <Brand />
            {children}
        </div> 
    );
}
export default Navbar;
