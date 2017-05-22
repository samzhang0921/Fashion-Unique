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
    const totalPage = Math.ceil(this.props.listInfo.total/this.props.listInfo.limit);
    const currentPage = parseInt(Math.floor(this.props.listInfo.offset/this.props.listInfo.limit)) +1;
    return (
      <div className={style.container}>
        <Sort
        onButtonClick= {this.props.onButtonClick}
        />
        <Title totaleProducts={this.props.listInfo.total}/>
        <Pagination currentPage={currentPage} totalPage={totalPage} />
      </div>
    );

  }
}
Header.propTypes = {
    changeView: React.PropTypes.func,
};
