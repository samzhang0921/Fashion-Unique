import React from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';
import Product from './Product';
import Filters from './Filters';
import Header from './Header';
import style from '../../style.css';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mouseOver: false,
      viewBtnClicked: false,
      offset: 0
    };
    this.handleButton = this.handleButton.bind(this);
    this.setOffset = this.setOffset.bind(this);
  }
  // listChangeView(nPV, nOV){
  //   this.setState({
  //     productsView: nPV,
  //     outfiteView: nOV
  //   })
  // }
  componentDidMount() {
    console.log('componentDidMount');
    const lang = this.props.lang;
    const url = `http://api.net-a-porter.com/NAP/GB/${lang}/60/${this.state.offset}/summaries?visibility=any-visible`;
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({data: res});
    })
  }

  getCatgories(summariesArr) {
    let categories = [];

    summariesArr.forEach(summary => {
      let currentCategory = summary.leafCategoryIds;
      currentCategory.forEach(currentCat => {
        if (categories.indexOf(currentCat) === -1) {
          categories.push(currentCat);
        }
      });
    });
    return categories;
  }

  handleButton(viewBtnClicked) {
    this.setState({viewBtnClicked});
  }

  getDesigners(summariesArr) {
    let designers = [];

    summariesArr.forEach(summary => {
      if (designers.indexOf(summary.brandId) === -1) {
        designers.push(summary.brandId);
      }
    });

    return designers;
  }

  setOffset(newOffet) {
    this.setState({offset: newOffet});
    console.log(this.state.offset);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // return a boolean value
    console.log(nextState);
    const lang = this.props.lang;
    const url = `http://api.net-a-porter.com/NAP/GB/${lang}/60/${this.state.offset}/summaries?visibility=any-visible`;
    fetch(url).then(res => {
      return res.json()
    }).then(res => {
      this.setState({data: res});
    })
    return nextState
  }
  render() {
    if (!this.state.data.summaries) {
      return <div>loading</div>
    }

    const categories = this.getCatgories(this.state.data.summaries);
    const designers = this.getDesigners(this.state.data.summaries);

    const totalPage = Math.ceil(this.state.data.listInfo.total / this.state.data.listInfo.limit);
    const currentPage = parseInt(Math.floor(this.state.data.listInfo.offset / this.state.data.listInfo.limit)) + 1;

    return (
      <div>
        <div>
          <Header listInfo={this.state.data.listInfo} onButtonClick={this.handleButton} currentPage={currentPage} totalPage={totalPage} setOffset={this.setOffset}/>
        </div>
        <div className={style.subnav}>
          <Filters categories={categories} designers={designers}/>
        </div>
        <div id="listing" className={style.productsList}>
          {this.state.data.summaries.map(pid => {
            const fit1 = this.state.viewBtnClicked
              ? 'in'
              : 'ou';
            const fit2 = this.state.viewBtnClicked
              ? 'ou'
              : 'in';
            const imgUrl = `https://cache.net-a-porter.com/images/products/${pid.id}/${pid.id}_${fit1}_sl.jpg`;
            const altUrl = `https://cache.net-a-porter.com/images/products/${pid.id}/${pid.id}_${fit2}_sl.jpg`;

            return <Product key={pid.id} product={pid} imgUrl={imgUrl} altUrl={altUrl}/>
          })}
        </div>
      </div>

    );

  }
}
