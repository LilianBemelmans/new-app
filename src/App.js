import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import News from './Components/News';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

class App extends Component {
  
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Home } exact={ true } />
          <Route path="/news/:data" component={ News } exact />
          <Route component={ NotFound }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;