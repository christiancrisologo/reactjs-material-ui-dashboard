import React from 'react';
import { render } from 'react-dom';
import './styles/style.scss';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import {NoPage} from './components/NoPage';

// import { Router, Route,hashHistory  } from 'react-router';

 
window.React = React;

// Needed for onTouchTap 
injectTapEventPlugin();


render(
    <App />
    /*<Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/add" component={App} />
        <Route path="/list" component={App} >
            <Route path=":filter" component={App} />
        </Route>
        
        <Route path="*" component={NoPage} />



    </Router>*/
    ,
    document.getElementById('app')
);