Examples = require '../collections/examples'
AboutPageView = require '../views/about/page'
ShowPageView = require '../views/show/page'

class AppRouter extends Backbone.Router
  routes:
    ''          : 'index'
    about       : 'about'
    'show(/)'   : 'show'
    'show/:text': 'show'


  index: ->


  about: ->
    unless @pageView instanceof AboutPageView
      @pageView = new AboutPageView
        el: 'body'
    @pageView.render()


  show: (text) ->
    unless @pageView instanceof ShowPageView
      @pageView = new ShowPageView
        el: 'body'
        router: this
    @pageView.render(text)


  data: {}


  initialize: ->
    window.data = @data
    @data.examples = new Examples()


module.exports = AppRouter
