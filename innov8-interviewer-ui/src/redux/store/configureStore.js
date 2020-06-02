import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import interviewerReducer from '../reducer/interviewer-reducer';
import requirementReducer from '../reducer/requirement-reducer';
import contactReducer from '../reducer/contact-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    interviewerData: interviewerReducer,
    requirementData: requirementReducer,
    contactData: contactReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;