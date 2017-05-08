import React from 'react';
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
    this.hover = this.hover.bind(this);
  }

  hover() {
    let mouse = !this.state.mouseOver;
    this.setState({
      mouseOver: mouse
    });
    console.log('mouse over:', this.state.mouseOver);
  }

  render() {
    // console.log('product props',this.props);
    const imgUrl = `https://cache.net-a-porter.com/images/products/${this.props.product.id}/${this.props.product.id}_ou_sl.jpg`
    const price = this.props.product.price.amount/this.props.product.price.divisor;
    return (
      <div onMouseOver={this.hover}>
        <img src={imgUrl} />
        <h4>{this.props.product.name}</h4>
        <p>{this.props.product.price.currency} {price}</p>
      </div>
    );
  }
}
