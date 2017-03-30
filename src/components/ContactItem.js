import React from 'react'

class ContactItem extends React.Component {
    render (){
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

export default ContactItem

