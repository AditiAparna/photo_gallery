import "./App.css";
import React from "react";
// import axios from "axios";
import ImageCard from "./component/imageCard";
import Header from "./component/header";

// var arr = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // array: [],
      searchQuery: ''
    };
  }

  setSearchQuery =(val)=> {
    return(
      this.setState({searchQuery: val})
    )
  }

  // getData = (val) => {
  //   var url
  //   if(val!==''){
  //     url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${this.state.searchQuery}&per_page=500&api_key=6c6db8d2fa785c51287ee6885124756a&format=json&nojsoncallback=1&safe_search=1`;
  //   } else{
  //     url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=500&api_key=6c6db8d2fa785c51287ee6885124756a&format=json&nojsoncallback=1&safe_search=1`;
  //   }
  //   try {
  //     axios({
  //       method: "get",
  //       url
  //     })
  //       .then((result) => {
  //         this.setState({
  //           arr: result.data.photos.photo.map((photo) => {
  //             arr.push(photo);
  //             return photo;
  //           })
  //         });
  //         this.setState({ array: arr });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  componentDidMount() {
    // this.getData(this.state.searchQuery);
  }

  componentDidUpdate(prevState){
    // if(this.state.searchQuery!==prevState.searchQuery){
      // console.log(this.state.searchQuery)
      // this.getData(this.state.searchQuery);
    // }
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
