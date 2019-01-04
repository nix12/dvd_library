import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // eslint-disable-next-line
import $ from 'jquery'; // eslint-disable-next-line
import Popper from 'popper.js';
import 'bootstrap/js/dist/dropdown';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Router } from 'react-router-dom';
import history from './history';
import { verifyCredentials } from './redux-token-auth-config';

import configureStore from './configureStore';

const { persistor, store } = configureStore();
verifyCredentials(store);

// const credentials = {
//   client: localStorage.getItem('client'),
//   token: localStorage.getItem('access-token')
// }

// const apiKeyURL = 'http://moviedatabase-env.us-west-2.elasticbeanstalk.com/api_keys/' + localStorage.getItem('client');
// axios.patch(apiKeyURL, credentials)
//   .then(response => {
//     console.log('index', response.data);
//   })

const app = (
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={ history }>
                <AlertProvider template={ AlertTemplate }>
                    <App />
                </AlertProvider>
            </Router>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
