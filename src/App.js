import React, { Component } from "react";
import Layout from "./components/Layout";

import "./index.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props
    

    return <Layout value={value} />;
  }
}
export default App;
