import React from 'react';
import {render} from 'react-dom';
import style from '../../style.css';
export default class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      buttonClicked: false
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(buttonClicked){
    this.setState({
      buttonClicked: !buttonClicked
    })
    this.props.onButtonClick(!buttonClicked);
  }

  render() {
    const { buttonClicked } = this.state;
    const buttonText = buttonClicked ? 'Outfit View' : 'Product View';
    return (

      <div className={style.sortBox}>
        <button onClick={()=>this.changeView(this.state.buttonClicked)}>{buttonText}</button>
        <div id="sort-by" className="sort-by">
          <form name="formPrice" method="get" id="product-list-price-filter">

            <select name="sortOrder">
              <option value="">Sort by</option>
              <option value="new-in">New in</option>

              <option value="price-desc">Price High to Low</option>
              <option value="price-asc">Price Low to High</option>
            </select>
          </form>
        </div>
      </div>
    );

  }
}
Sort.propTypes = {
    changeView: React.PropTypes.func,
};
