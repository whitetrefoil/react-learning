class Example extends Backbone.Model
  initialize: ->
    @set 'number', Math.random()


module.exports = Example
