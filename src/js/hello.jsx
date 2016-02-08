import React, {Component} from 'react';

export default class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	incrementCount() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				Hello, {this.props.name}!
				{this.state.count}
				<button onClick={this.incrementCount.bind(this)}>Increment</button>
			</div>
		)
	}
}