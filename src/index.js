import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/nav"
import "./stylesheets/index.css"

class Index extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <br/>
                <div className="container">
                   <h1> hi pkkkk </h1>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById("index"));

