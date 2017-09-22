import React from 'react';  
import { render }from 'react-dom';  
import { AppContainer } from 'react-hot-loader'; 
import {  
  browserHistory,
  BrowserRouter as Router,
  Route,
  HashRouter,
  hashHistory
} from 'react-router-dom';

import App from './components/app'
import Index from './components/index'
/**
 * browerHistory  适用history API在浏览器中
 * hashHistory 
 * createMemoryHistory
 * 
*/
render(
    <AppContainer>
        <HashRouter history={hashHistory}>
            <App>
                <Route exact path="/" component={ Index }/>
            </App>
        </HashRouter>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {  
  module.hot.accept();
}