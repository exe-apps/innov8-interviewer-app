import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import interviewerReducer from '../reducer/interviewer-reducer';
import requirementReducer from '../reducer/requirement-reducer';
import contactReducer from '../reducer/contact-reducer';
import { reducer as formReducer } from 'redux-form';
import createOidcMiddleware, {loadUser} from 'redux-oidc';
import userManager from '../config/userManager';
import { reducer as oidcReducer } from 'redux-oidc';
import subscriptionsReducer from '../reducer/subscription-reducer';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
// import { browserHistory } from 'react-router';

// create the middleware with the userManager
const oidcMiddleware = createOidcMiddleware(userManager);

const rootReducer = combineReducers({
    interviewerData: interviewerReducer,
    requirementData: requirementReducer,
    contactData: contactReducer,
    oidcData: oidcReducer,
    subscriptionsData: subscriptionsReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, oidcMiddleware))
);

loadUser(store, userManager);

export default store;