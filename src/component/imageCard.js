import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cardContainer">
        {this.props.array.map((photo) => {
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
      </div>
    );
  }
}
