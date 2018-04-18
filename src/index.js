import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from 'containers/App/App.jsx';
import './assets/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" name="Home" component={App} />
            </Switch>
        </BrowserRouter>
        
    </Provider>
,document.getElementById('root'));
registerServiceWorker();
