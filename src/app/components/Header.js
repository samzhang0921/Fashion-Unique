import React from 'react';
import { render } from 'react-dom';
import Pagination from './Pagination'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  render() {
    const totalPage = Math.ceil(this.props.listInfo.total/this.props.listInfo.limit);
    const currentPage = parseInt(Math.floor(this.props.listInfo.offset/this.props.listInfo.limit)) +1;
    return (
      <div>
        <Pagination currentPage={currentPage} totalPage={totalPage} />
      </div>
    );

  }
}
