import React, { Component } from 'react';

export default class News extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <h1>News</h1>
                <p>This is news!!</p>
            </div>
        )
    }
}