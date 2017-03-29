import React from 'react'
import CheckList from './CheckList'
import FocusText from './FocusText'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    var cards = this.props.items.map(function (value, key) {
      return <div key={key}>
        <div className='card__title'>{value.title}</div>
        <div className='card__details'>{value.description}</div>
        <CheckList tasks={value.tasks} />
        { value.status === 'todo'
            ? <FocusText />
            : null
        }
      </div>
    }, this)
    return (
      <div className='card'>
        {cards}
      </div>
    )
  }
}

export default Card
