'use strict';

var Popover = ReactBootstrap.Popover;
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      /*jshint ignore:start */
      <article className="page row">
        <section className="page-content col-sm-9 col-sm-push-3 col-xs-12">
          <h2>Home</h2>
          <p>Use the navbar above to navigate between pages.</p>
        </section>
        <aside className="page-aside col-sm-3 col-sm-pull-9 col-xs-12">
          <Popover placement="left" positionTop={50} positionLeft={100}>
            Or... Try <Link to="about">this link?</Link>
          </Popover>
        </aside>
      </article>
      /*jshint ignore:end */
    );
  }
});

module.exports = Home;
