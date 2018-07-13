import React from "react";
import { Link } from 'react-router-dom'


const style = {
    "paddingTop": "10px",
    "paddingBottom": "10px",
}

const btnStyle = {
    "paddingTop": "25px",
    "paddingBottom": "25px",
    "backgroundColor": "white",
    "width": "100%",
    "textAlign": "left",
    "boxShadow": "0 0 10px #ccc"
}

const textStyle = {
    "paddingLeft": "25px",
    "paddingRight": "5px",
    "textAlign": "left",
    "color": "gray"
}

class Applicant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appId: props.appId,
            firstName: null,
            lastName: null,
            jobTitle: null
        }
        this.appInfo = this.appInfo.bind(this);
    }

    appInfo(appId) {
        fetch(`/hwob/applicant/${appId}`)
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data)
            const d = data[0];
            this.setState({
                firstName: d.firstName,
                lastName: d.lastName,
                jobTitle: d.jobTitle
            })
            return
        })
    }

    componentWillMount() {
        this.appInfo(this.state.appId);
    }

    render() {
        return (
            <div className="row" style={style}>
                <div className="col-sm-10">
                    <Link to="/documents">
                        <button style={btnStyle} className="btn">
                            <span style={textStyle}>
                                {this.state.firstName}
                            </span>
                            <span style={{"color": "gray"}}>
                                {this.state.lastName}
                            </span>
                            <div style={textStyle}>
                                {this.state.jobTitle}
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Applicant;