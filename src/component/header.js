import React from "react";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchQuery:'',
        previousSearch: []
    };
  }

  componentDidMount(){
      this.setState({previousSearch: JSON.parse(localStorage.getItem('previousSearch'))})
  }
  render(){
    return(
        <div className="bg">
            <div>
                <text style={{color:'white',fontSize:'40px'}}>Search Photos</text>
            </div>
            <div className="search">    
                <input 
                    id="searchBar" 
                    className="input" 
                    placeholder="Press Enter To Search" 
                    autoComplete="on"
                    onChange={(value)=>{
                                this.setState({searchQuery:value.target.value})
                            }}
                    value={this.state.searchQuery}
                    onKeyUp={(value) => { 
                                if (value.code === "Enter") {
                                    this.props.setSearchQuery(value.target.value)
                                    this.setState({previousSearch: [...this.state.previousSearch, value.target.value]})
                                    localStorage.setItem('previousSearch',JSON.stringify(this.state.previousSearch))
                                }}}
                />
            </div>
        </div>
  )}
}