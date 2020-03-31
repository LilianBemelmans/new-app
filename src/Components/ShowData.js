import React, { Component } from 'react';

export default class ShowData extends Component {

    state = { numCounts: 0 }

    increaseCount() {
        this.setState({ numCounts: this.state.numCounts + 1 });
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-2 m-1">
                    { this.props.data.name }
                </div>
                <div className="col-md-1 m-1">
                    <button className="btn btn-primary btn-sm" 
                             onClick={ () => this.increaseCount() }>
                        { this.state.numCounts } clicked
                    </button>
                </div>
                <div className="col-md-1 m-1">
                    <button className="btn btn-primary btn-sm"
                            onClick={ () => this.props.onDelete(this.props.data.id) }>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}