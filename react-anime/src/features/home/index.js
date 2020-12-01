import React from 'react';

import Body from '../../containers/body'
import Navbar from '../../containers/navbar'

const Home = () =>{
    console.log('home');
    return (
        <Body>
            <Navbar>
                home pao batata
            </Navbar>
            <Body>
                Home page
            </Body>
        </Body>
    );
}

export default Home;