import "./App.css";
import React from "react";
import ImageCard from "./component/imageCard";
import Header from "./component/header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  setSearchQuery =(val)=> {
    return(
      this.setState({searchQuery: val})
    )
  }

  render() {
    return (
      <div className="App">
        <Header setSearchQuery={this.setSearchQuery} />
        <ImageCard searchQuery={this.state.searchQuery}/>
      </div>
    );
  }
}
