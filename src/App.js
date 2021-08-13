import './App.css';
import React from 'react';
import axios from 'axios';
import ImageCard from './component/imageCard';

  var arr=[];
  

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array:[]
    };
  };

  getData = ()=> {
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6c6db8d2fa785c51287ee6885124756a&format=json&nojsoncallback=1`;
    try {
      axios({
        method: 'get',
        url,
      }).then((result) => {
        console.log(result.data)
        this.setState({arr:
        result.data.photos.photo.map((photo) => { 
          arr.push(photo);
          return photo })
      })
      this.setState({array: arr})
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  componentDidMount(){
    this.getData();
  }

  render(){
  return (
    <div className="App">
      {console.log(this.state.array)}
      <div style={{display: 'grid',gridTemplateColumns: 'auto auto auto'}}>
        <ImageCard array={this.state.array}/>
      </div>
    </div>
  );
  }
}
