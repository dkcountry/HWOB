import React from "react";

const style = {
    "paddingLeft": "15px",
    "paddingRight": "50px",
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
            return
        })
    }

    render() {
        return (
            <div style={style}>
                {this.state.appId}
                {this.appInfo(this.state.appId)}
            </div>
        )
    }


}

export default Applicant;