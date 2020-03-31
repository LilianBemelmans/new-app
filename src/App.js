import React, { Component } from 'react';
import ShowData from './Components/ShowData.js';

export default class App extends Component {

  state = {
    data: [
      { id: 1, name: "Paul"}, { id: 2, name: "John"},
      { id: 3, name: "George"}, { id: 4, name: "Ringo"},
    ]
  }

  handleDelete = (id) => {
    var data = this.state.data.filter( item => item.id !== id );
    this.setState({ data: data });
    console.log("Handle Delete!!", id );
  }

  
  render() {
    return(
      <div className="m-5">
      {
        this.state.data.map( item => {
          return( <ShowData key={ item.id } data={ item } onDelete={ this.handleDelete } />)
        })
      }
      </div>
    )
  }
}