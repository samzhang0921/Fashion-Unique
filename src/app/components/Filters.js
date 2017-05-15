import React from 'react';
import { render } from 'react-dom';
import style from '../../style.css';
import Categories from './Categories';
import Designers from './Designers'

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className={style.filters}>
        <Categories categories={this.props.categories} />
        <Designers designers={this.props.designers} />
      </div>
    );

  }
}
