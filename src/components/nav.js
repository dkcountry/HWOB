import React from "react";
import { Link } from 'react-router-dom'


const style = {
    "paddingRight": "10px",
    "float": "left"
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/dashboard" className="navbar-brand">hacker<strong>migration</strong> </Link>
                    <div className="navbar-text" style={{"fontSize": "15px"}}>
                            <div style={style}>
                                <a href="#">Settings</a>
                            </div>
                            <Link to="/">Logout </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;