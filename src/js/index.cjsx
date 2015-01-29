AppRouter = require './routers/app'

$ ->
  new AppRouter()
  Backbone.history.start()
