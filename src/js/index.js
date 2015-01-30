(function(React, ReactRouter) {
  'use strict';

  var routes = require('./routes/indexRoutes');

  ReactRouter.run(routes, function(Handler) {
    React.render(
      /*jshint ignore:start */
      <Handler />
      , document.body
      /*jshint ignore:end */
    );
  });

})(window.React, window.ReactRouter);
