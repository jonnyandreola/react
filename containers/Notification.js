import React from 'react';
import { connect } from 'react-redux';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    // redux action, preferably the type should be constant not a string
    markAsRead (id) {
    	return this.props.dispatch({type: 'MARK_AS_READ', id: id})
    }

    render() {
    	let {notification} = this.props;
        return (
        	<div>
        		{/*
        		 * props are passed down from parent
        		 * check NotficationList to see the data being passed down
        		 */}
        		<strong>{notification.title}</strong><span style={{display:notification.isRead ? "block" : "none"}}>Read</span>
        		<button onClick={this.markAsRead.bind(this, notification.id)}>Read</button>
        	</div>
        );
    }
}

// Injects just redux dispatch into component props
Notification = connect()(Notification);

export default Notification;
