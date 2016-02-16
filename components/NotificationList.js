import React from 'react';
import { connect } from 'react-redux';
import Notification from '../containers/Notification';

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {Notifications} = this.props;

        return (
            <div>
                {Object.keys(Notifications).forEach((key, i) => {
                    return <Notification notification={Notifications[key]} key={i}/>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Notifications : state.Notifications,
        isRead: state.isRead
    }
}

NotificationList = connect(mapStateToProps)(NotificationList)

export default NotificationList;
