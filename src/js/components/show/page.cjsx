React = require 'react'

ShowPageComponent = React.createClass
  render: ->
    message = if _.isEmpty(@props.text)
      'Type something & enter to try!'
    else
      @props.text

    return ('''#
      <div id="page">
        <h1>Example!</h1>
        <p>{message}</p>
        <form name="example" action="javascript:">
          <p><input type="text" name="text" /></p>
          <p><button type="submit">Try!</button></p>
        </form>
      </div>
    #''')


module.exports = ShowPageComponent
