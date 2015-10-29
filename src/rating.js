(function () {
  'use strict';

  var React = require('react');

  var Rating = React.createClass({
    render: function () {
      return(
        <div>
          <hr />
          <h4>{ this.props.rating.stars } stars</h4>
          <p> { this.props.rating.text }</p>
        </div>
      );
    }
  });

  module.exports = Rating;
})();
