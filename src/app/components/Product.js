import React from 'react';
import style from '../../style.css';
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
      <div onMouseOver={this.hover} className={style.listItem}>
        <div><img src={imgUrl} /></div>
        <div className={style.listItemDescription}>
        {this.props.product.name}
        <br/>
        <span>£ {price}</span>
        <br className={style.clearBoth}/>  
        </div>
      </div>
    );
  }
}
