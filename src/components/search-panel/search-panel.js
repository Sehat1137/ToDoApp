import React from "react";

import "./search-panel.css"

class SearchPanel extends React.Component{

    state = {
        term: ""
    }

    onSearchChange = (e) =>{
        const term = e.target.value
        this.setState({term: term})
        this.props.onSearchState(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                placeholder="search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
            )
    }
}

export default SearchPanel;