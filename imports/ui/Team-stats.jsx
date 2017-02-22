import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';




export default class TeamStats extends Component{
  render() {
    const players = this.props.players;
    const numPlayers = players.length;

    const dribbling = Math.round((players.reduce((dribbling, player) => {
      return dribbling + player.dribbling;
    }, 0) / ( 3 * numPlayers )) * 100)

    const shooting = Math.round((players.reduce((shooting, player) => {
      return shooting + player.shooting;
    }, 0) / ( 3 * numPlayers )) * 100)

    const passing = Math.round((players.reduce((passing, player) => {
      return passing + player.passing;
    }, 0) / ( 3 * numPlayers )) * 100)

    const tackling = Math.round((players.reduce((tackling, player) => {
      return tackling + player.tackling;
    }, 0) / ( 3 * numPlayers )) * 100)

    const speed = Math.round((players.reduce((speed, player) => {
      return speed + player.speed;
    }, 0) / ( 3 * numPlayers )) * 100)

    const blocking = Math.round((players.reduce((blocking, player) => {
      return blocking + player.blocking;
    }, 0) / ( 3 * numPlayers )) * 100)

    const strategy = Math.round((players.reduce((strategy, player) => {
      return strategy + player.strategy;
    }, 0) / ( 3 * numPlayers )) * 100)

    const playmaking = Math.round((players.reduce((playmaking, player) => {
      return playmaking + player.playmaking;
    }, 0) / ( 3 * numPlayers )) * 100)

    const defense = Math.round((tackling + speed + blocking + strategy + playmaking)/5);
    const offense = Math.round((shooting + strategy + dribbling + passing + speed + playmaking)/ 6);
    const total = Math.round((blocking + tackling + shooting + strategy + dribbling + passing + speed + playmaking)/8);


    const data = {
      labels: ['Dribbling', 'Shooting', 'Passing','Tackling', 'Speed', 'blocking', 'Strategy', 'Playmaking'],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12,71,161,1)',
          pointBackgroundColor: 'rgba(12,71,161,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12,71,161,1)',
          data: [dribbling, shooting, passing, tackling, speed, blocking, strategy, playmaking]
        }
      ]
    };
    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={data}
              width={500}
              height={500}
              option={{
                maintainAspectRatio: false
              }}/>
            </div>
            <div className="col s12 m5">
              <h4>Scores in % of max possible</h4>
              <Divider />
              <h4>Team's offence: {offense}</h4>
              <h4>Team's defence: {defense}</h4>
              <h4>Team's total: {total}</h4>
              <Divider />
              <h4>Number of players: {numPlayers}</h4>
            </div>
          </div>
        </div>
      );
    }
  }
