import React from 'react';

import './styles.css';

const Body = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div> 
    );
}

export default Body;