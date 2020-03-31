import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Profile from './Components/Profile';
import Pagina from './Components/Pagina';
import News from './Components/News';
import Home from './Components/Home';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showJobs: false,
      showJobsText: "Toon CV",
      numClicks: 0
    }
  }

  buttonClick() {
    var n = this.state.numClicks + 1;
    console.log(this.state.numClicks);

    this.setState({
      showJobs: !this.state.showJobs,
      showJobsText: !this.state.showJobs ? "Verberg CV" : "Toon CV",
      numClicks: n
    });
  }

  render() {
    var data = {
      naam: "Piet Cursist",
      email: "piet@cursisten.com",
      jobs: [
        {id: 1, title: "Junior Developer"},
        {id: 2, title: "JavaScript Developer"},
        {id: 3, title: "React Developer"},
      ]
    }
    return(
      <React.Fragment>
        <div className="App-header">
          <Profile data={ data }
                   background="#F0F"
                   showJobs= { this.state.showJobs } />
          <button onClick={ () => this.buttonClick() }>
            { this.state.showJobsText }
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;