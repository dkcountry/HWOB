import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/nav";
import UserHome from "./components/userHome";
import "./stylesheets/index.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                   <UserHome />
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("index"));

