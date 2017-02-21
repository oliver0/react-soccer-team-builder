import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin:12,
  }
};


export default class Player extends Component{
  showEditForm() {
    this.props.showEditForm();
  }
  render() {
    const player = this.props.player;
    const defence = player.tackling + player.speed + player.blocking + player.strategy + player.playmaking;
    const offence = player.shooting + player.strategy + player.dribbling + player.passing + player.speed + player.playmaking;
    const total =  player.blocking + player.tackling + player.shooting + player.strategy + player.dribbling + player.passing + player.speed + player.playmaking;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offense: ${offence} - Defence: ${defence} - Total: ${total} `} />}
          >
            <img src="player.jpg" />
          </CardMedia>
          <CardText>
            <div style={styles.wrapper}>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.dribbling}
                  </Avatar>
                  Dribbling
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.shooting}
                  </Avatar>
                  Shooting
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.passing}
                  </Avatar>
                  Passing
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.tackling}
                  </Avatar>
                  Tackling
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.speed}
                  </Avatar>
                  Speed
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.blocking}
                  </Avatar>
                  Blocking
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.strategy}
                  </Avatar>
                  Strategy
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    {player.playmaking}
                  </Avatar>
                  Playmaking
              </Chip>
            </div>
          </CardText>
          <CardActions>
            <RaisedButton
              label="Edit player/stats"
              labelPosition="before"
              style={styles.button}
              onClick={this.showEditForm.bind(this)}>

            </RaisedButton>
          </CardActions>
        </Card>
      )
    }
  }
