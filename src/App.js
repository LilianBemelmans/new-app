import React, { Component } from 'react';
import API from './lib/API';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: []
    };
  }

  componentDidMount() {

    API.fetchData()
    .then( data => {
      console.log(data);
      this.setState({ data: data })
    })
    .catch(error => { // doe iets met de error 
    });
  }
  
  render() {
    if(this.state.isLoaded) {
      return(
        <div>
          <ul>
            {
              this.state.data.map( (item) => {
                return(
                  <li key={ item.id.toString() }>
                    <div>
                      <img src={ item.img } style={{ width: 100, height: 100}} />
                      <p>{ item.title }</p>
                    </div>
                  </li>)
              })
            }
          </ul>
        </div>
      );
    }
    else {
      return(
        <div><h1>Loading...</h1></div>
      );
    }
  }
}

export default App;