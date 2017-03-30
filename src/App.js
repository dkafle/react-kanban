import React, { Component } from 'react'
import 'whatwg-fetch'
import './App.css'
import KanbaBoard from './components/KanbanBoard'
//import Contacts from './components/Contacts'

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'test'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {data:[]}
  }
  addTask (cardId, taskName) {
   console.log(cardId, taskName);
  }
  deleteTask (cardId, taskId, taskIndex) {
   console.log(cardId, taskId, taskIndex);
  }
  toggleTask (cardId, taskId, taskIndex) {
    console.log(cardId, taskId, taskIndex);
  }  
  componentDidMount () {
    fetch(API_URL + '/cards', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({data: responseData})
    })
  }
  render () {
    return (
      <div className='App'>
        <KanbaBoard
          title='Kanban Board'
          workItems={this.state.data}
          taskCallbacks={{
                toggle: this.toggleTask.bind(this),
                delete: this.deleteTask.bind(this),
                add: this.addTask.bind(this)
            }} />
            {/*<Contacts />*/}
      </div>
    )
  }
}

export default App
