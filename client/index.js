import React from 'react';  
import { render }from 'react-dom';  
import { AppContainer } from 'react-hot-loader'; 
import {  
  browserHistory,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './components/app'
/**
 * browerHistory  适用history API在浏览器中
 * hashHistory 
 * createMemoryHistory
 * 
*/
render(
    <AppContainer>
        <Router>
            <Route path="/" component={ App }>
            </Route>
        </Router>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {  
  module.hot.accept();
}