import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import interviewerReducer from '../reducer/interviewer-reducer';
import requirementReducer from '../reducer/requirement-reducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    interviewerData: interviewerReducer,
    requirementData: requirementReducer,
    form: formReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;