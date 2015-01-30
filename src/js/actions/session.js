'use strict';

var SessionActions = Reflux.createActions({
  refresh: { asyncResult: true },
  login: { asyncResult: true },
  logout: { asyncResult: true },
  getUserInfo: {}
});

module.exports = SessionActions;
