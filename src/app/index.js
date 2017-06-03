import React from "react";
import { render } from "react-dom";

import Listing from "./components/Listing";

class App extends React.Component {
  render(){
    const language = "en";
    return (
      <div>
          <Listing lang={language} />
      </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
