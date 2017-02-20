import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

import App from '../imports/ui/App.jsx';
import Example from '../imports/ui/Example';
import Lost from '../imports/ui/Lost'

injectTapEventPlugin();

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
