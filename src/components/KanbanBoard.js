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
  addTask (cardId, taskName) {
  }
  deleteTask (cardId, taskId, taskIndex) {
  }
  toggleTask (cardId, taskId, taskIndex) {
  }
  render (props) {
    return (
      <div className='app'>
        <List
          listName='Todo'
          workItems={this._getItems('todo')} 
          allowToAdd={true} 
          taskCallbacks={this.props.taskCallbacks}/>
        <List
          listName='In Progress'
          workItems={this._getItems('in-progress')} 
          allowToAdd={false} 
          taskCallbacks={this.props.taskCallbacks} />
        <List
          listName='Done'
          workItems={this._getItems('done')} 
          allowToAdd={false} 
          taskCallbacks={this.props.taskCallbacks} />
      </div>
    )
  }
}

export default KanbanBoard
