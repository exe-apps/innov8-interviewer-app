import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import interviewerReducer from '../reducer/interviewer-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    interviewerData: interviewerReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;