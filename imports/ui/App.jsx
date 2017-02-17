import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component{
  getPlayers() {
    return [
      {
        _id: 1,
        name: "Oliver Alexander"
        dribbling: 2,
        shooting: 3,
        passing: 1,
        tackling: 1,
        speed: 3,
        blocking: 2.
        strategy: 3,
        playmaking: 2
      },
      {
        _id: 2,
        name: "Lisa Tarbuck"
        dribbling: 1,
        shooting: 3,
        passing: 2,
        tackling: 3,
        speed: 1,
        blocking: 1.
        strategy: 3,
        playmaking: 2
      },
      {
        _id: 3,
        name: "Johnathon Ross"
        dribbling: 1,
        shooting: 3,
        passing: 3,
        tackling: 1,
        speed: 2,
        blocking: 2.
        strategy: 2,
        playmaking: 2
      },
    ]
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5"><TeamStats /></div>
            <div className="col s12 m5"><TeamList /></div>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}
