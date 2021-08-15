import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

var arr = [];
export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        array:[],
        searchQuery: '',
    };
  }

  componentDidMount(){
      this.setState({searchQuery: this.props.searchQuery})
      this.getData(this.props.searchQuery)
  }

  componentDidUpdate(prevProps){
      if(prevProps.searchQuery!==this.props.searchQuery){
        this.setState({searchQuery: this.props.searchQuery})
        this.getData(this.props.searchQuery)
    }
  }
  getData = (val) => {
    arr.length=0
    var url
    if(val && val!==''){
      url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${val}&per_page=500&api_key=6c6db8d2fa785c51287ee6885124756a&format=json&nojsoncallback=1&safe_search=1`;
    } else{
      url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=500&api_key=6c6db8d2fa785c51287ee6885124756a&format=json&nojsoncallback=1&safe_search=1`;
    }
    try {
      axios({
        method: "get",
        url
      })
        .then((result) => {
          this.setState({
            arr: result.data.photos.photo.map((photo) => {
              arr.push(photo);
              return photo;
            })
          });
          this.setState({ array: arr });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        array: this.state.array.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
    <InfiniteScroll
          dataLength={this.state.array.length}
          next={()=>this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
      <div className="cardContainer">
        {this.state.array.map((photo) => {
          return (
            <div>
              <div key={photo.id} className="cards">
                <img
                  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`}
                  alt={photo.title}
                  onClick={() => {
                    document.getElementById(photo.id).style.display = "block";
                  }}
                />
              </div>
              <div id={photo.id} className="modal">
                <span
                  className="close"
                  onClick={() => {
                    document.getElementById(photo.id).style.display = "none";
                  }}
                >
                  &times;
                </span>
                <img
                  class="modal-content"
                  src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
                  alt={photo.title}
                />
                <div id="caption">{photo.title}</div>
              </div>
            </div>
          );
        })}
        
        {/* <div class="d-flex justify-content-center load">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
          </div> */}
      </div>
     </InfiniteScroll>
    );
  }
}
