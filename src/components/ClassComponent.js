import React, { Component } from 'react';

export class ClassComponent extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            //props are assigned to the state 
            ...props
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name : { this.state.name}</li>
                    <li>qualification : { this.state.qualification}</li>
                    <li>pincode : { this.state.pincode}</li>
                    <li>isMarried : { this.state.isMarried.toString()}</li>
                    {/* <li>address : { this.state.address}</li> */}
               
                </ul>
           </div>);
    }
}

export default ClassComponent;
