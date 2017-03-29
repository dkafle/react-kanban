import React from 'react'
import ReactDOM from 'react-dom'
import KanbanBoard from './KanbanBoard'

it('KanbanBoard renders properly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<KanbanBoard />, div)
})
