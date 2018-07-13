import React from "react";
import { Link } from 'react-router-dom'


const style = {
    "paddingRight": "10px",
    "float": "left"
}

const navStyle = {
    "height": "100px"
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <Link to="/" className="navbar-brand">hacker<strong>migration</strong> </Link>
                <div className="navbar-text">
                        <div style={style}><a href="#">Settings</a></div>
                        <a href="#">Logout </a>
                </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;