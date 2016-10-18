import React from 'react';

export default class BasicStatInput extends React.Component{
  render() {
    return (
      <div>
        {this.props.stat}
        <input type='text' name={this.prop.stat} value={this.props.stat} />
      </div>
    );
  }
}
