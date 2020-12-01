import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../features/home';


const Routes = ()=>{
    return (
        <BrowserRouter>
            <Switch >
                <Route path={"/"} component={Home} />
                <Route exact path={"/:anime/"} component={()=>{ return (<div>Anime</div>)}} />
                <Route exact path={"/:anime/:episode/"} component={()=>{ return (<div>Episode</div>)}} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;