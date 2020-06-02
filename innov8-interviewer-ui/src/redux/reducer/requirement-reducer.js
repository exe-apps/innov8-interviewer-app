import { 
    GET_REQUIREMENT_LIST
} from '../constant/requirement-constants';

const initialState = {
    requirementsList: []
}

const requirementReducer = (state = initialState, action) => {
    if(action.type === GET_REQUIREMENT_LIST) {
        return {
            ...state,
            requirementsList : action.payload
        }
    }

    return state;
}

export default requirementReducer;