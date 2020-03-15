import React from 'react';
import{ BrowserRouter, Switch, Route, } from 'react-router-dom';
import Navigation from '../component/Navigation';

import Home from '../component/Home';
import About from '../component/About'
import Contact from '../component/Contact';

export default function Router (){
    return(
        <div className="App">
        <BrowserRouter> 
        <div>
        < Navigation />
        <Switch>
            <Route exact path="/" component={Home}/> 
            <Route path="/about"component={About}/>
            <Route path="/contact" component={Contact}/>
            </Switch>
            </div>
            </ BrowserRouter>
            </div>

    );
}