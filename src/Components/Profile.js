import React, { Component } from 'react';
import ListItem from './ListItem';

export default class Profile extends Component{

  render () {

    var mailto = "mailto:" + this.props.data.email;
    var style = {
      backgroundColor: this.props.background,
      width: "60%",
      margin: 40,
      padding: 20
    }

    return(
      <React.Fragment>
        <div style={ style }>
          <h1>{ this.props.data.naam }</h1>
          <a href={ mailto }>{ this.props.data.email }</a>
        </div>
        { this._renderJobs() }
      </React.Fragment>
    );
  }

  _renderJobs() {
    if(this.props.showJobs){
      return(
        <ul>
        {
            this.props.data.jobs.map( (item) => {
              return(<ListItem key={ item.id }
                                data={ item }>
                      </ListItem>);
          })          
        }
        </ul>
      )
    }
  }
}