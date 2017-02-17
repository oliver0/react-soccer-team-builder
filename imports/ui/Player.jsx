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
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Oliver Alexander" subtitle="Offense: 12 - Defence:8" />}
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
                    2
                  </Avatar>
                  Dribbling
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Shooting
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Passing
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Tackling
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Speed
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Blocking
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Strategy
              </Chip>
              <Chip
                backgroundColor={blue200}
                style={styles.chip}
                >
                  <Avatar size={32} color={blue200} backgroundColor={blue900}>
                    2
                  </Avatar>
                  Playmaking
              </Chip>
            </div>
          </CardText>
          <CardActions>
          </CardActions>
        </Card>
      )
    }
  }
