import React from 'react';
import { render } from 'react-dom';
export default class Designers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div>
        <h4>Designers</h4>
        {this.props.designers.map(designer => {
          return <div key={designer}>{designer}</div>
        })}
      </div>
    );

  }
}
