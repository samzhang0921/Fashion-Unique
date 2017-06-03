import React from 'react';
import {render} from 'react-dom';
import style from '../../style.css';
export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getHtml = this.getHtml.bind(this);
  };

  getHtml(page, currentPage) {
    if (isNaN(page)) {
      return (
        <li className={style.pagenationBoxLi}>
          <span>{page}</span>
        </li>
      )
    } else {
      if (page === -1) {
        return (
          <li className={[style.pagenationBoxLi, style.paginationPrevious, style.paginationArrow].join(" ")}>
            <span></span>
          </li>
        )
      }
      if (page === 0) {
        return (
          <li className={[style.pagenationBoxLi, style.paginationNext, style.paginationArrow].join(" ")}>
            <span></span>
          </li>
        )
      }
      if (page === currentPage) {
        return (
          <li className={style.pagenationBoxLi}>
            <span>{page}</span>
          </li>
        )
      }
      if (page > 0) {
        return (
          <li className={style.pagenationBoxLi}>
            <a href={"?pn=" + page}>{page}</a>
          </li>
        )
      }
    }
  }

  render() {
    const arrow = (this.props.page <= 0)
      ? ''
      : this.props.page;

    const dot = (isNaN(this.props.page))
      ? 'dot'
      : this.props.page;
    return ( this.props.page === this.props.currentPage
      ? <li className={style.pagenationBoxCurrentPage}>
        <span>{this.props.currentPage}</span>
      </li>
      : <li className={[
        style['pagination-'+dot],
        style.pagenationBoxLi
      ].join(" ")}>
        <span>{arrow}</span>
      </li>
    )

  };

}
