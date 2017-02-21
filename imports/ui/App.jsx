import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

//database collection
import { Players } from '../api/players'

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import AccountsWrapper from './AccountsWrapper';

const tempPlayer = {
  name: "Temp player",
  team: "Temp",
  dribbling: 2,
  shooting: 3,
  passing: 2,
  tackling: 1,
  speed: 2,
  blocking: 0,
  strategy: 1,
  playmaking: 2,
  notes: "This player is only temporary",
}

export class App extends Component{
  constructor(props) {
    super(props);

    //setting up the state
    this.state = {
      currentPlayer: tempPlayer,
      showEditPLayer: false,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer} />
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  showEditForm() {
    this.setState({
      showEditPLayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: false,
    })
  }

  showForm(){
    if(this.state.showEditPlayer === true) {
      return ( <Edit currentPlayer={this.state.currentPlayer}
      showTeamStats={this.showTeamStats}/>);
    } else {
      return ( <TeamStats />);
  }
}

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
              <AccountsWrapper />
            </AppBar>

            <div className="row">
              <div className="col s12 m7"><Player player={this.state.currentPlayer}/></div>
              <div className="col s12 m5">
                <h2>Team List</h2><Link to="/new" className="waves-light waves-effect btn">Add players</Link>
                <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
                <Divider />
              </div>
              <div className="col s12 m5">{this.showForm}</div>
            </div>
          </div>

        </MuiThemeProvider>
      )
    }
  }

  App.propTypes = {
    players: PropTypes.array.isRequired,
  };

  export default createContainer(() => {
    Meteor.subscribe('players');
    const user = Meteor.userId();
    return {
      players: Players.find({ owner: user}, {sort: {name: 1}}).fetch(),
    };
  }, App);
