import React from "react";
import Applicant from "./applicant";


const style = {
    "paddingTop": "50px",
}

const btnStyle = {
    "backgroundColor": "#2e65d3"
}

class UserHome extends React.Component {
    constructor(props) {
        super(props);
        this.clickTest = this.clickTest.bind(this);
    }

    clickTest() {
        alert('btn clicked');
    }

    render() {
        return (
            <div style={style}>
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Your H1B Petitions </h5>
                    </div>
                    <div className="col-sm-6" style={{"textAlign": "center"}}>
                    <button onClick={this.clickTest} style={btnStyle} type="button" className="btn btn-primary">Start New H1B App</button>
                    </div>

                    <Applicant appId="123" />

                </div>
            </div>
        );
    }
}


export default UserHome;