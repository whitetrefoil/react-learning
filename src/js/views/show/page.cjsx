React = require 'react'
ShowPageComponent = require '../../components/show/page'

class ShowPageView extends Backbone.View
  events:
    'submit form[name=example]': 'submit'

  submit: (event) ->
    form = event.currentTarget;
    text = form['text'].value
    @appRouter.navigate "show/#{text}",
      trigger: true

  render: (text) ->
    React.render('''#
      <ShowPageComponent text=text />
    #''',
      @el
    )

  initialize: (options) ->
    @appRouter = options.router


module.exports = ShowPageView
