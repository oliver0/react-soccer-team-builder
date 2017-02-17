import React, { Component } from 'react';
import { Card, CardMedia, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors'


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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
          </CardActions>
        </Card>
      )
    }
  }
