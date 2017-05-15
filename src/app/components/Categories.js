import React from 'react';
import { render } from 'react-dom';
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    return (
      <div>
        <h4>categories</h4>
        {this.props.categories.map(category => {
          return <div key={category}>{category}</div>
        })}
      </div>
    );

  }
}
