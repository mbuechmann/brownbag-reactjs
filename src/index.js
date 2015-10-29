(function () {
  'use strict';

  var React = require('react');
  var ReactDOM = require('react-dom');
  var RatingsBox = require('./ratings-box');

  $(function () {
    ReactDOM.render(
      <RatingsBox url="/ratings" />,
      document.getElementById('ratings')
    );
  });
})();
