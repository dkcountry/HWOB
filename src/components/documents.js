import React from "react";
import NavBar from "./nav";


const style = {
    "paddingRight": "10px",
    "float": "left"
}

const navStyle = {
    "height": "100px"
}

class Documents extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    document page
                </div>
            </div>
        );
    }
}

export default Documents;