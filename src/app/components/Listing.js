import React from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';
import Product from './Product'

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      mouseOver: false
    };
  }

  componentDidMount(){
    console.log('componentDidMount');
    const url = 'http://api.net-a-porter.com/NAP/GB/en/60/0/summaries?visibility=any-visible';
    fetch(url)
    .then( res => {
      return res.json()
    })
    .then( res => {
      this.setState({
        data: res
      });
    })
  }

  render() {
    console.log('render');
    // console.log(this.state);
    if (!this.state.data.summaries) {
      return <div>loading</div>
    }

    return (
      <div>
        {this.state.data.summaries.map(pid => {
          return <Product product={pid} />
        })}
      </div>
    );

  }
}
