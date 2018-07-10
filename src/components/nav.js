import React from "react";


const style = {
    "paddingRight": "10px",
    "float": "left"
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="#">hacker<strong>migration</strong> </a>
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