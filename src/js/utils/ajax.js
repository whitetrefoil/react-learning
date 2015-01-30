'use strict';

var mockServer = 'http://localhost:3000';

$.ajaxSetup({
  contentType: 'application/json',
  dataType   : 'json',
  cache      : false
});

var Ajax = {
  get: function(url, data, options) {
    var ajaxOptions = {
      type       : 'GET',
      url        : mockServer + url,
      data       : _.isEmpty(data) ? {} : data,
      contentType: 'application/json',
      dataType   : 'json',
      processData: true,
      cache      : false
    };

    _.merge(ajaxOptions, options);

    return $.ajax(ajaxOptions);
  },

  post: function(url, data, options) {
    var ajaxOptions = {
      type       : 'POST',
      url        : mockServer + url,
      data       : _.isEmpty(data) ? {} : data,
      contentType: 'application/json',
      dataType   : 'json',
      processData: true,
      cache      : false
    };

    _.merge(ajaxOptions, options);

    return $.ajax(ajaxOptions);
  },

  put: function(url, data, options) {

  },

  del: function(url, data, options) {

  }
};

module.exports = Ajax;
