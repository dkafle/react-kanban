import React from 'react'
import ContactItem from './ContactItem'

class ContactList extends React.Component {
    render () {
        let filteredContacts = this.props.contacts.filter( (contact) => {
            return contact.name.indexOf(this.props.filterText) !== -1
        })
        return (
            <ul>
                {filteredContacts.map(
                    (contact) => <ContactItem
                    key={contact.email}
                    name={contact.name}
                    email={contact.email} />
                )}
            </ul>
        )
    }
}

export default ContactList

