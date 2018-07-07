import React from "react";


const style = {
    "background-color": "blue"
}


class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">

                <a className="navbar-brand" href="#">Hacker Migration </a>
            </nav>
        );
    }
}

export default NavBar;