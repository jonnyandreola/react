import { createStore } from 'redux';

let initial = {
	Notifications: {
		1: {title: 'First', id: 1},
		2: {title: 'Second', id: 2}
	}
}

let reducer = (state, action) => {
	switch (action.type) {
		case 'MARK_AS_READ' :
			return Object.assign({}, state, state.Notifications[action.id].isRead = true)
	}
	return state;
}

export default createStore(reducer, initial)