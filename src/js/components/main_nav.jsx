'use strict';

var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavItemLink = ReactRouterBootstrap.NavItemLink;

var MainNav = React.createClass({
  render: function() {
    return (
      /*jshint ignore:start */
      <Nav bsStyle="pills">
        <NavItemLink to="home">Home</NavItemLink>
        <NavItemLink to="about">About</NavItemLink>
        <NavItem disabled={true}>TBD</NavItem>
      </Nav>
      /*jshint ignore:end */
    );
  }
});

module.exports = MainNav;
