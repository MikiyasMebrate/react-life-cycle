import React, { Component } from "react";
import Button from "./Shared/Button";

class ReactLifeCycle extends Component {
    state = {
        firstName: 'Kaleab',
        day: 1
    }

    shouldComponentUpdate(nextProps, nextState) {
        const status = nextState.day > 30 ? false : true
        return status
    }

    componentDidUpdate(nextProps, nextState) {
        console.log(nextState)
        if (nextState.day === 29) {
            this.setState({ congratulate: 'Congratulations,Challenge has been completed' })
        }
    }

    doChallenge = () => {
        this.setState({ day: this.state.day + 1 })
    }
    render() {
        return (
            <div className="mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 container text-center card p-3">
                        <h1>Component Life Cycle</h1>
                        <h2>ComponentDidMount Component</h2>
                        <h3>{this.state.firstName}</h3>
                        <h3>day {this.state.day} of 30</h3>
                        {this.state.congratulate && <h2 className="text-success">{this.state.congratulate}</h2>}
                        <Button onClick={this.doChallenge} text='Next Challenge' />
                    </div>
                </div>
            </div>
        )
    }
}


export default ReactLifeCycle