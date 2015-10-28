(function () {
  'use strict';

  var React = require('react');
  var $ = require('jquery-browserify');

  var Ratings = React.createClass({
    getInitialState: function () {
      return {ratings: []};
    },
    componentDidMount: function () {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({ratings: data.ratings});
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    averageRating: function () {
      if (this.state.ratings.length === 0) {
        return 0;
      }
      var sum = 0;
      this.state.ratings.forEach(function (rating) {
        sum += rating.stars;
      });

      return Math.floor(sum / this.state.ratings.length);
    },
    render: function () {
      if (this.state.ratings.length === 0) {
        return(<p>Sorry, no ratings yet</p>);
      }

      var ratingList = this.state.ratings.map(function (rating) {
        return(<li>{ rating.stars } stars:<br /> { rating.text }</li>);
      });
      return(
        <div>
          <h1>Rating { this.averageRating() }</h1>
          <p>Based on { this.state.ratings.length } reviews</p>
          <ul>
            { ratingList }
          </ul>
        </div>
      );
    }
  });

  module.exports = Ratings;
})();
