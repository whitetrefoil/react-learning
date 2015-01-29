React = require 'react'

AboutPageComponent = React.createClass
  render: -> '''#
    <div id="page">
      <h1>About Me!</h1>
      <p>This is just a {@props.name} page!</p>
    </div>
  #'''


module.exports = AboutPageComponent
