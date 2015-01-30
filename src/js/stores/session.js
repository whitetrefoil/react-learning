'use strict';

var Ajax = require('../utils/ajax');

var SessionActions = require('../actions/session');

var SessionStore = Reflux.createStore({
  listenables: [SessionActions],

  init: function() {
    this.data = {};
  },

  onRefresh: function() {
    Ajax.get('/login')
      .done(SessionActions.refresh.completed)
      .fail(SessionActions.refresh.failed);
  },

  onRefreshCompleted: function(data) {
    this.data = data;
    console.log('Refreshed successfully');
    console.log(data);
  },

  onRefreshFailed: function(error) {
    console.warn('Refreshing FAILED!');
    console.warn(error);
  },

  onLogin: function() {
    Ajax.post('/login', {
      'username': 'test',
      'password': 'test'
    }).done(SessionActions.login.completed)
      .fail(SessionActions.login.failed);
  },

  onLoginCompleted: function(data) {
    this.data = data;
    console.log('Logged-in successfully');
    console.log(data);
  },

  onLoginFailed: function(error) {
    console.warn('Login FAILED!');
    console.warn(error);
  },

  onLogout: function() {
    console.log('Logout: ', arguments);
  },

  onGetUserInfo: function() {
    console.log(this.data);
  }
});

module.exports = SessionStore;
