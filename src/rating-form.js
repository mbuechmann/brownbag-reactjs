(function () {
  'use strict';

  var React = require('react');
  var $ = require('jquery');

  var RatingForm = React.createClass({
    handleSubmit: function (event) {
      event.preventDefault();

      var $form = $(event.target);
      var rating = {
        text: $form.find('#text').val(),
        stars:  $form.find('#stars').val()
      };

      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: rating,
        success: function(data) {
          this.props.ratingSent();
          // notify container
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(xhr, status, err.toString());
        }.bind(this)
      });
    },
    render: function () {
      return(
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="stars">Stars</label> <select id="stars" name="stars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br /><br />
          <label htmlFor="text">Text</label> <input id="text" type="text" name="text" /><br /><br />
          <input type="submit" value="Send comment" />
        </form>
      );
    }
  });

  module.exports = RatingForm;
})();
