import React, { Component } from 'react'
import './App.css'
import KanbaBoard from './components/KanbanBoard'

var data = [{
  id: 1,
  title: 'Card one title',
  description: 'Card detailed description.',
  status: 'todo',
  tasks: [{
    id: 1,
    name: 'Task one',
    done: true
  }, {
    id: 2,
    name: 'Task two',
    done: false
  }, {
    id: 3,
    name: 'Task three',
    done: false
  }]
}, {
  id: 2,
  title: 'W-I-P Item',
  description: 'This is my work in progress todo card',
  status: 'in-progress',
  tasks: [{
    id: 1,
    name: 'working item task',
    done: true
  }]
}, {
  id: 3,
  title: 'Card Three title',
  description: 'Card detailed description',
  status: 'done',
  tasks: []
}]

class App extends Component {
  render () {
    return (
      <div className='App'>
        <KanbaBoard
          title='Kanban Board'
          workItems={data} />
      </div>
    )
  }
}

export default App
