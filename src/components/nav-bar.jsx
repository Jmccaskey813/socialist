import React from 'react'
import { Link} from 'react-router-dom';

const NavBar = () => (
    <div className= "navBar">
        <ul>
            <li>
                <Link to= "/public-page">Public Page</Link>
            </li>
            <li>
                <Link to= "/sign-in">Sign In</Link>
            </li>
            <li>
                <Link to= "/">Home</Link>
            </li>
            <li className="title-pin">socialist</li>
        </ul>
    </div>
);

export default NavBar; 
