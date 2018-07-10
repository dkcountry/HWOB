import React from "react";

class Applicant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appId: props.appId
        }
        this.appInfo = this.appInfo.bind(this);
    }

    appInfo(appId) {
        fetch(`/hwob/applicant/${appId}`)
        .then(results => {
            console.log(results)
            return results.json();
            
        }).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                {this.state.appId}
                {this.appInfo(this.state.appId)}
            </div>
        )
    }


}

export default Applicant;