import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);

        this.state ={
            term: ''
        }
    }

    search(){
        this.props.onSearch(this.state.term)
    }

    handleSearchTerm(event){
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchTerm}/>
                <button className="SearchButton">SEARCH</button>
            </div>
        )

    }
}

export default SearchBar;