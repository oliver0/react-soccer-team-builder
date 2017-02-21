import React, { Component } from 'react';

export default class Edit extends Component{
  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(event) {
    event.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      dribbling: this.refs.dribbling.value,
      shooting: this.refs.shooting.value,
      passing: this.refs.passing.value,
      tackling: this.refs.tackling.value,
      speed: this.refs.speed.value,
      blocking: this.refs.blocking.value,
      strategy: this.refs.strategy.value,
      playmaking:this.refs.playmaking.value ,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('updatePlayer', player, (error) => {
      if(error) {
        alert("Oops something went wrong: ", error.reason);
      } else {
        alert("Player updates");
        this.showTeamStats();
      }
    });
  }
  render() {
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)}>
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team}/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Dribbling</h5>
              <select className="browser-default" ref="dribbling" defaultValue={currentPlayer.dribbling}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Shooting</h5>
              <select className="browser-default" ref="shooting" defaultValue={currentPlayer.shooting}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Passing</h5>
              <select className="browser-default" ref="passing" defaultValue={currentPlayer.passing}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Tackling</h5>
              <select className="browser-default" ref="tackling" defaultValue={currentPlayer.tackling}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Speed</h5>
              <select className="browser-default" ref="speed" defaultValue={currentPlayer.speed}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking</h5>
              <select className="browser-default" ref="blocking" defaultValue={currentPlayer.blocking}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Strategy</h5>
              <select className="browser-default" ref="strategy" defaultValue={currentPlayer.strategy}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking</h5>
              <select className="browser-default" ref="playmaking" defaultValue={currentPlayer.name}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
