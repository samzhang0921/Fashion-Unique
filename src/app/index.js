import React from "react";
import { render } from "react-dom";

import { Header } from "./Components/Header";
import { Home } from "./Components/Header";
import { Footer } from "./Components/Header";

class App extends React.Component {
  render(){
    return (
      <div>
          <div><Header/></div>
          <div><Home/></div>
          <div><Footer/></div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
