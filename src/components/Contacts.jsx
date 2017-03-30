import React from 'react'
import 'whatwg-fetch'
import SearchBar from './SearchBar'
import ContactList from './ContactList'

class Contacts extends React.Component {
    constructor (props) {
        super(props)
        this.state = { filterText: '', contacts:[] }
    }
    handleUserInput (searchTerm) {
        this.setState({filterText:searchTerm})
    }
    componentWillMount () {
        fetch('./contacts.json')
        .then ((response) => response.json())
        .then ((responsedata) => {
            this.setState({contacts:responsedata})
        })
        .catch((error) => {
            console.log('Error while fetching and parsing data', error)
        })
    }
    render () {
        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText} 
                    onUserInput={this.handleUserInput.bind(this)} />
                <ContactList 
                    contacts={this.state.contacts} 
                    filterText={this.state.filterText} />
            </div>
        )
    }
}

export default Contacts

