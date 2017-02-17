import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component{
  render() {
    return (
      <MuiThemeProvider>
        <div><Player /></div>
        <div><TeamStats /></div>
        <div><TeamList /></div>
      </MuiThemeProvider>
    )
  }
}
