import React from 'react'

export default React.createClass({

  getInitialState () {
    return { text: '', ok: false }
  },

  handleSubmit (e) {
    e.preventDefault()
    if (this.props.onAdd(this.state.text)) {
      this.setState({text: '', ok: false})
    }
  },

  onChange (e) {
    this.setState({text: e.target.value, ok: !!e.target.value})
  },

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.onChange} value={this.state.text} />
        <button disabled={!this.state.ok} style={{background: 'transparent'}}>Add item</button>
      </form>
    )
  }
})
