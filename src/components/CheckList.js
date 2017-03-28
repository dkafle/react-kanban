import React from 'react'

class CheckList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    let tasks = this.props.tasks.map(function (task, key) {
      return <li key={key} className='checklist__task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist__task--remove' />
      </li>
    })
    return (
      <div className='checklist'>
        <ul>
          {tasks}
        </ul>
      </div>
    )
  }
}

export default CheckList
