import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import RootApp from './routers/root-app';

ReactDOM.render(
        <RootApp />,
    document.getElementById('root')
);
