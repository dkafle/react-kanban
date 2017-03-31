import React from 'react'

class FocusText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  handleClick () {
    this.refs.myTextInput.focus()
  }
  render () {
    return (
      <div>
        <input type='text' ref='myTextInput' />
        <input
          type='button'
          value='Focus the text input'
          onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}
export default FocusText

