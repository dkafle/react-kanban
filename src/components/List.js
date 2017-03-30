import React from 'react'
import Card from './Card'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='list'>
        <h1>{this.props.listName}</h1>
        <Card items={this.props.workItems} 
        taskCallbacks={this.props.taskCallbacks} />
      </div>
    )
  }
}

export default List
