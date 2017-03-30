import React from 'react'

class SearchBar extends React.Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }
    render () {
        return <input type="search" 
            value={this.props.filterText} 
            onChange={this.handleChange.bind(this)}
            placeholder="search" />
    }
}

export default SearchBar

