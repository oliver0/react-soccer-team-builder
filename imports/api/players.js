/*jshint esversion: 6 */

import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const PlayerSchema = new SimpleSchema({
  team: { type: String},
  name: { type: String},
  dribbling: { type: Number, defaultValue: 0},
  shooting: { type: Number, defaultValue: 0},
  passing: { type: Number, defaultValue: 0},
  tackling: { type: Number, defaultValue: 0},
  speed: { type: Number, defaultValue: 0},
  blocking: { type: Number, defaultValue: 0},
  strategy: { type: Number, defaultValue: 0},
  playmaking: { type: Number, defaultValue: 0},
  notes: { type: String, optional: true},
  owner: { type: String },

});

Players.attachSchema(PlayerSchema);
