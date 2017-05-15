import React from 'react';
import { render } from 'react-dom';
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    const currentPageLink = `?pn=${this.props.currentPage}`;
    const totalPageLink = `?pn=${this.props.totalPage}`;
    return (
      <div>
        <a href="?pn=1">1</a>
        <a href={currentPageLink}>{this.props.currentPage}</a>
        <a href={totalPageLink}>{this.props.totalPage}</a>
      </div>
    );

  }
}
