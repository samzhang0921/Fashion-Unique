import React from 'react';
import style from '../../style.css';
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      imgUrl: this.props.imgUrl,
      altUrl: this.props.altUrl

    };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    let { mouse } = this.state;
    this.setState({
      mouseOver: !mouse,
      imgUrl: this.state.altUrl,
      altUrl: this.state.imgUrl
    });
  }

  render() {
    const price = this.props.product.price.amount/this.props.product.price.divisor;
    return (
      <div onMouseEnter={this.toggleImage} onMouseLeave={this.toggleImage} className={style.listItem}>
        <div><img data-image={this.state.altUrl} src={this.state.imgUrl} /></div>
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
