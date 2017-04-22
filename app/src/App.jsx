import '../../node_modules/spectre.css/spectre.less';
import '../../node_modules/spectre.css/spectre-exp.less';
import '../../node_modules/spectre.css/spectre-icons.less';
import '../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ApodContainer from './Container/ApodContainer';
import { Provider } from 'react-redux';
import store from './Store';


// Render to ID content in the DOM
ReactDOM.render(
    <Provider store={store}>
        <ApodContainer />
    </Provider>,
    document.getElementById('content')
);