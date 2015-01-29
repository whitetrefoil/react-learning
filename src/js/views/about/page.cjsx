React = require 'react'
AboutPageComponent = require '../../components/about/page'

class AboutPageView extends Backbone.View
  render: ->
    React.render('''#
      <AboutPageComponent name="sample" />
    #''',
      @el
    )


module.exports = AboutPageView
