import React from 'react';
import './imageCard.css';

export default class ImageCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render(){
        return(
            <div>
                {console.log('jdhd',this.props.array)}
                <div>
                    {this.props.array.map((photo)=> {
                        return(
                        <div key={photo.id} className="cardContainer">
                            <div>
                                <img
                                    src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
                                    alt={photo.title}
                                />
                            </div>
                        </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}