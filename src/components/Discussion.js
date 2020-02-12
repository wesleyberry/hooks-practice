import React, { Component } from 'react';

class Discussion extends Component {

    constructor() {
        super();

        this.state = {
            pageTitle: 'Discussion',
            currentTime: String(new Date())
        };
    }


    
    render() {
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
            </div>
        )
    }
}

export default Discussion;
