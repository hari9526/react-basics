import React, { Component } from 'react';

export class CounterComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 220,
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}> Count = { this.state.count}</button>

            </div>
        );
    }
}

export default CounterComponent;
