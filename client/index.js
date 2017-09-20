import React from 'react';  
import ReactDOM from 'react-dom';  
import Counter from './Counter';
import { AppContainer } from 'react-hot-loader'; 
import {  
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router';

/**
 * browerHistory  适用history API在浏览器中
 * hashHistory 
 * createMemoryHistory
 * 
*/
ReactDOM.render(
    <AppContainer>
        <Router history={ browserHistory }>
            <Route path="/" component={App}>
                <Route path="/artlist" component={artlist}></Route>
            </Route>
        </Router>
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {  
  module.hot.accept();
}