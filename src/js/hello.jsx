const React = require('react');

let Hello =  React.createClass({
	render: function () {
		return (
			<div>
				Hello, {this.props.name}!
			</div>
		)
	}
});

module.exports = Hello;