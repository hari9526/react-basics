import React, { Component } from 'react';

export class UseEffectClassComponent extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            count : 0, 
        }
        
    }
    componentDidMount() {
        document.title = `You clicked : ${this.state.count}`; 
    }

    componentDidUpdate() {
        document.title = `You clicked : ${this.state.count}`; 
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

export default UseEffectClassComponent;
