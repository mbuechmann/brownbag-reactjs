(function () {
  'use strict';

  var React = require('react');
  var ReactDOM = require('react-dom');
  var Ratings = require('./ratings');

  $(function () {
    ReactDOM.render(
      <Ratings url="/ratings" />,
      document.getElementById('ratings')
    );
  });
})();
