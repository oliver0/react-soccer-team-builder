/*jshint esversion: 6 */


import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.methods({
  insertPlayers(player) {
    Players.insert(player);
  }
});
