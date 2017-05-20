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
      mouseOver: false
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const lang = this.props.lang;
    const url = `http://api.net-a-porter.com/NAP/GB/${lang}/60/0/summaries?visibility=any-visible`;
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

  getDesigners(summariesArr) {
    let designers = [];

    summariesArr.forEach(summary => {
      if (designers.indexOf(summary.brandId) === -1) {
        designers.push(summary.brandId);
      }
    });

    return designers;
  }

  render() {
    if (!this.state.data.summaries) {
      return <div>loading</div>
    }

    const categories = this.getCatgories(this.state.data.summaries);
    const designers = this.getDesigners(this.state.data.summaries);

    return (
      <div>
        <div className={style.container}>
          <Header listInfo={this.state.data.listInfo}/>
        </div>
        <div className="subnav">
          <Filters categories={categories} designers={designers}/>
        </div>
        <div id="listing" className="productsList">
          {this.state.data.summaries.map(pid => {
            const imgUrl = `https://cache.net-a-porter.com/images/products/${pid.id}/${pid.id}_ou_sl.jpg`;
            const altUrl = `https://cache.net-a-porter.com/images/products/${pid.id}/${pid.id}_in_sl.jpg`
            return <Product key={pid.id} product={pid} imgUrl={imgUrl} altUrl={altUrl}/>
          })}
        </div>
      </div>

    );

  }
}
