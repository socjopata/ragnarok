// HomeComponentWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Kreator postaci Ragnarok
        </h3>
      </div>
    );
  }
};
