import React, { Component } from 'react';

export default class Pagina extends Component{

    render() {
        return(
            <div className="App-header" >
                <h4> Dit is de Pagina-Component</h4>
                { this.props.children }
            </div>
        )
    }
}
