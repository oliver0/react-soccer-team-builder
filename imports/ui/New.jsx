import React, { Component } from 'react';

export default class Example extends Component{
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Dribbling</h5>
              <select className="browser-default" ref="dribbling">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Shooting</h5>
              <select className="browser-default" ref="shooting">
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
              <select className="browser-default" ref="passing">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Tackling</h5>
              <select className="browser-default" ref="tackling">
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
              <select className="browser-default" ref="speed">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking</h5>
              <select className="browser-default" ref="blocking">
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
              <select className="browser-default" ref="strategy">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvemnet</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills!</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking</h5>
              <select className="browser-default" ref="playmaking">
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
