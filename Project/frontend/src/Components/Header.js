import React from "react";
import {Link} from 'react-router-dom'


function Header(){

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Create Student</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search Student</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/update" className="nav-link">UpdateStudent</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/delete" className="nav-link">DeleteStudent</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
         </nav>
    )
}

export default Header;