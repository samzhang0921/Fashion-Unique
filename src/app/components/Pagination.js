import React from 'react';
import {render} from 'react-dom';
import style from '../../style.css';
import Page from './Page'
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.getPagenation = this.getPagenation.bind(this);

  };

  getPagenation(currentPage, totalPage) {
    let pagenationArray = [];

    if (totalPage <= 5) {
      pagenationArray.push(-1);
      for (let i = 1; i <= totalPage; i++) {
        pagenationArray.push(i);
      }
      pagenationArray.push(0);
      0
    } else {
      if (currentPage <= 3) {
        pagenationArray.push(-1);
        for (let i = 1; i <= 3; i++) {
          pagenationArray.push(i);
        }
        pagenationArray.push("...");
        pagenationArray.push(totalPage);
        pagenationArray.push(0);
      } else {
        if (currentPage > 3 && currentPage < totalPage - 2) {
          pagenationArray.push(-1);
          pagenationArray.push(1);
          pagenationArray.push("...");
          pagenationArray.push(currentPage - 1);
          pagenationArray.push(currentPage);
          pagenationArray.push(currentPage + 1);
          pagenationArray.push("...");
          pagenationArray.push(totalPage);
          pagenationArray.push(0);
        } else {
          pagenationArray.push(-1);
          pagenationArray.push(1);
          pagenationArray.push("...");
          for (let i = totalPage - 2; i <= totalPage; i++) {
            pagenationArray.push(i);
          }
          pagenationArray.push(0);
        }
      }
    }
    console.log(pagenationArray);
    return pagenationArray;

  };

  render() {
    let pagenations = this.getPagenation(this.props.currentPage, this.props.totalPage);
    return (
      <div className={style.pagenationBox}>
        <ul className={style.pagenationBoxUl}>
          {pagenations.map((pagenation, index) => {
            return <Page key={index} page={pagenation} currentPage={this.props.currentPage} totalPage={this.props.totalPage}/>
          })}
        </ul>
      </div>
    )

  }

}
