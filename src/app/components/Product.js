import React from 'react';
import style from '../../style.css';
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false

    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    let { mouseOver } = this.state;
    this.setState({
      mouseOver: !mouseOver,
    });
  }

  render() {
    const price = this.props.product.price.amount/this.props.product.price.divisor;
    const { imgUrl, altUrl } = this.props;
    const finalImageUrl = this.state.mouseOver ? altUrl : imgUrl;

    return (
      <div onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage} className={style.listItem}>
        <div><img src={finalImageUrl} /></div>
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
