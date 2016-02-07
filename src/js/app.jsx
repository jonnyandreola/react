const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('./hello');
const container = document.getElementById('app-container');

ReactDOM.render(<Hello name='World' />, container);