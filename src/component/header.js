import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
        <div className="bg">
            <div>
                <text style={{color:'white',fontSize:'40px'}}>Search Photos</text>
            </div>
            <div className="search">    
                <input id="searchBar" className="input" placeholder="Search" onChange={(value)=>this.props.setSearchQuery(value.target.value)}></input>
            </div>
        </div>
  )}
}