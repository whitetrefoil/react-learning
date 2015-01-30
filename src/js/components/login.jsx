'use strict';

var SessionActions = require('../actions/session');
var SessionStore = require('../stores/session');

var Login = React.createClass({
  init: function() {

  },

  getInitialState: function() {
    return {output: ''};
  },

  showToken: function() {
    this.setState({output: SessionStore.getToken()});
  },

  render: function() {
    var output = _.isEmpty(this.state.output) ? '' : 'Debug output: ' + this.state.output;
    return (
      /*jshint ignore:start */
      <article className="page row">
        <section className="page-content col-xs-12">
          <h2>Login</h2>
          <p>{output}</p>
          <p><button type="button" onClick={SessionActions.refresh}>Refresh Session</button></p>
          <p><button type="button" onClick={SessionActions.login}>Login Automatically</button></p>
          <p><button type="button" onClick={this.showToken}>Show Token</button></p>
        </section>
      </article>
      /*jshint ignore:end */
    );
  }
});

module.exports = Login;
