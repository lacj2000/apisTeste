import React from 'react';
import { Navbar } from 'react-bootstrap'
import logo_econdomini from '../../_assets/logo_econdomini.png'

import './styles.css';

const Brand = () => {
    return (
        <Navbar.Brand className="navbar-brand">
            <img src={logo_econdomini} alt="Logo" />
        </Navbar.Brand> 
    );
}
export default Brand;
