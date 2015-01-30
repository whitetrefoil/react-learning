'use strict';

var Popover = ReactBootstrap.Popover;
var Link = ReactRouter.Link;
var SessionActions = require('../actions/session');

var Login = React.createClass({
  render: function() {
    return (
      /*jshint ignore:start */
      <article className="page row">
        <section className="page-content col-xs-12">
          <h2>Login</h2>
          <p><button type="button" onClick={SessionActions.refresh}>Refresh Session</button></p>
          <p><button type="button" onClick={SessionActions.login}>Login Automatically</button></p>
          <p><button type="button" onClick={SessionActions.getUserInfo}>Get User Info.</button></p>
        </section>
      </article>
      /*jshint ignore:end */
    );
  }
});

module.exports = Login;
