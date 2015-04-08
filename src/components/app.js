import React from 'react'
import List from './list'
import Input from './input'

export default React.createClass({

  getInitialState () {
    return {items: []}
  },

  addItem (itemName) {
    this.setState({items: this.state.items.concat([itemName])})
    return true
  },

  render () {
    return (
      <div>
        <h1>To-do managers</h1>
        <Input onAdd={this.addItem} />
        <List items={this.state.items} />
      </div>
    )
  }

})
