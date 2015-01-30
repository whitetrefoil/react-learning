'use strict';

var Popover = ReactBootstrap.Popover;
var Link = ReactRouter.Link;

var About = React.createClass({
  render: function() {
    return (
      /*jshint ignore:start */
      <article className="page row">
        <section className="page-content col-sm-9 col-sm-push-3 col-xs-12">
          <h2>About Me</h2>
          <p>This is just a very very simple example about a small application.</p>
          <p>This application is for nothing but self-study about how to build an application from zero using technics around "React".</p>
        </section>
        <aside className="page-aside col-sm-3 col-sm-pull-9 col-xs-12">
          <Popover placement="left" positionTop={50} positionLeft={100}>
            Or go back from <Link to="home">here</Link> ;)
          </Popover>
        </aside>
      </article>
      /*jshint ignore:end */
    );

  }
});

module.exports = About;
