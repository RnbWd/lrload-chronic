import React from 'react'

export default React.createClass({
  render () {
    return (
      <ul>
        {this.props.items.map((it) => { return <li>item : {it}</li> })}
      </ul>
    )
  }
})
