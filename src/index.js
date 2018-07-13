import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from "./main";
import "./stylesheets/index.css";
import { Link } from 'react-router-dom'


class App extends React.Component {
    render() {
        return (
            <RouteHandler />
        );
    }
}

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('index'))