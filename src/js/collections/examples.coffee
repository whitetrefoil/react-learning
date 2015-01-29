Example = require '../models/example'

class Examples extends Backbone.Collection
  model: Example

  initialize: ->
    _.times 10, ->
      @push new @model()
    , this


module.exports = Examples
