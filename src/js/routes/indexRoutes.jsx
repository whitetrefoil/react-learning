'use strict';

var App = require('../components/app');
var Home = require('../components/home');
var About = require('../components/about');

var indexRoutes = (
  /*jshint ignore:start */
  <ReactRouter.Route handler={App} path="/">
    <ReactRouter.Route name="home" handler={Home} />
    <ReactRouter.Route name="about" handler={About} />
    <ReactRouter.Redirect from="/" to="home" />
  </ReactRouter.Route>
  /*jshint ignore:end */
);

module.exports = indexRoutes;
