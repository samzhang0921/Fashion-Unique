import React from 'react';
import {render} from 'react-dom';
import style from '../../style.css';
export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changePage = this.changePage.bind(this);
  };

  changePage(page) {
    if (page < 0) {
      const npage = (this.props.currentPage === 1)
        ? 0
        : (this.props.currentPage-2) * 60;
      this.props.setOffset(npage)
    } else if (page === 0) {
      const npage = (this.props.currentPage === this.props.totalPage)
        ? (this.props.totalPage - 1) * 60
        : this.props.currentPage * 60;
      this.props.setOffset(npage)
    } else if (page > 0){
      this.props.setOffset((this.props.page - 1) * 60)
    }
  }

  render() {
    const arrow = (this.props.page <= 0)
      ? ''
      : this.props.page;

    const dot = (isNaN(this.props.page))
      ? 'dot'
      : this.props.page;
    return (this.props.page === this.props.currentPage
      ? <li onClick={() => this.changePage(this.props.page)} className={style.pagenationBoxCurrentPage}>
          <span>{this.props.currentPage}</span>
        </li>
      : <li onClick={() => this.changePage(this.props.page)} className={[
        style['pagination-' + dot],
        style.pagenationBoxLi
      ].join(" ")}>
        <span>{arrow}</span>
      </li>)

  };

}
