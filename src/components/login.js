import React from "react";
import { Link } from 'react-router-dom'


const style = {
    "margin": "auto",
    "fontSize": "40px"
}

const navStyle = {
    "height": "200px"
}

const formStyle = {
    "paddingLeft": "37%",
    "paddingRight": "37%",
    "paddingTop": "50px"
}

const btnStyle = {
    "backgroundColor": "#445c82"
}

class LoginPage extends React.Component {
    render() {
        return (
        <div>
            <nav style={navStyle} className="navbar navbar-dark bg-dark">
                <div className="container">
                <p  style={style} className="navbar-brand">hacker<strong>migration</strong> </p>
                </div>
            </nav>
            
            <form style={formStyle}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <Link to="/dashboard"> 
                    <button style={btnStyle} type="submit" className="btn btn-primary">Submit</button> 
                </Link>
            </form>
        </div>
    )}
}

export default LoginPage;