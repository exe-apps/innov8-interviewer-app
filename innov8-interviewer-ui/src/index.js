import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store/configureStore.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import userManager from './redux/config/userManager';
import { OidcProvider } from 'redux-oidc';

ReactDOM.render((
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </OidcProvider>
  </Provider>
  ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
