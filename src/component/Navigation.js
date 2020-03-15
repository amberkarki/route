import React from 'react';
import{  Link} from 'react-router-dom';
import { nav,button } from 'react-bootstrap';
//import Home from './Home';
//import About from './About';
//import Contact from './Contact';
import"bootstrap/dist/css/bootstrap.min.css";

export default function Navigation (){
    return( 
<nav className="navbar navbar-expand-lg navbar-light bg -light">
<button className="navbar-toggler navbar-toggler-right" type="button"
data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-navmr-auto">
<li className="nav-item active">
 <Link className="nav-link"to="/"  >Home</Link>
 </li>
<li className="nav-item">
 <Link className="nav-link"to="/about">About</Link>
 </li>
<li className="nav-item">
 <Link className="nav-link"to="/contact">Contact</Link>
 </li>
</ul>
</div>
</nav>

);

}