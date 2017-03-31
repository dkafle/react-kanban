import React from 'react'
import List from './List'

class KanbanBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  _getItems (status) {
    let items = this.props.workItems.filter(function (item) {
      return item.status === status
    })
    return items
  }
  render (props) {
    return (
      <div className='app'>
        <List
          listName='Todo'
          workItems={this._getItems('todo')}
          allowToAdd />
        <List
          listName='In Progress'
          workItems={this._getItems('in-progress')}
          allowToAdd={false} />
        <List
          listName='Done'
          workItems={this._getItems('done')}
          allowToAdd={false} />
      </div>
    )
  }
}

export default KanbanBoard
