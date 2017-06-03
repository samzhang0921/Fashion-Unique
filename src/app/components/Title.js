import React from 'react';
import { render } from 'react-dom';
import style from '../../style.css';
export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {

    return (
      <div className={style.titleBox}>
        <h1>All Products</h1>
        <div className={style.resultsBox}>
            <div>
                <span>{this.props.totaleProducts}&nbsp;Results</span>
            </div>
        </div>
    </div>
    );

  }
}
