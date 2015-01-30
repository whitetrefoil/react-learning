'use strict';

var PageHeader = ReactBootstrap.PageHeader;
var MainNav = require('./main_nav');

var App = React.createClass({
  render: function() {
    return (
      /*jshint ignore:start */
      <div id="app" className="container">
        <header>
          <PageHeader>Test Application! <small>- No kidding! Just test!</small></PageHeader>
          <MainNav />
        </header>
        <ReactRouter.RouteHandler />
      </div>
      /*jshint ignore:end */
    );
  }
});

module.exports = App;
