import React from 'react';
import { render } from 'react-dom';
import Pagination from './Pagination';
import Title from './Title';
import Sort from './Sort';
import style from '../../style.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  };

  render() {
    return (
      <div className={style.container}>
        <Sort
        onButtonClick= {this.props.onButtonClick}
        />
        <Title totaleProducts={this.props.listInfo.total}/>
        <Pagination currentPage={this.props.currentPage} totalPage={this.props.totalPage} setOffset={this.props.setOffset}/>
      </div>
    );

  }
}
Header.propTypes = {
    changeView: React.PropTypes.func,
};
