import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                </li>
                <li className="nav-item">
                    <p className="top">{props.message}</p>
                </li>
                <li className="nav-item">
                    <p className="top"
                    >Score: {props.score} | Games Won: {props.wins}
                    </p>
                </li>
            </ul>
        </div>
    </nav>

);


export default Navbar;