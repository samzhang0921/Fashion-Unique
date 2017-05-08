import React from "react";
import { render } from "react-dom";

import Listing from "./components/Listing";

class App extends React.Component {
  render(){
    return (
      <div>
          <Listing />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
