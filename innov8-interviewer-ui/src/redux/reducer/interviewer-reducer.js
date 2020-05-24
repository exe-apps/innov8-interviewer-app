import { 
    GET_INTERVIEWER_LIST,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL
} from '../constant/interviewer-constants';

const initialState = {
    interviewerList: [],
    interviewerInfo: {},
    showInterviewerInfoModal: false
}

const interviewerReducer = (state = initialState, action) => {
    if(action.type === GET_INTERVIEWER_LIST) {
        return {
            ...state,
            interviewerList : action.payload
        }
    }

    if(action.type === SHOW_INTERVIEWER_INFO_MODAL) {
        return {
            ...state,
            interviewerInfo: action.interviewerInfo,
            showInterviewerInfoModal : true
        }
    }

    if(action.type === CLOSE_INTERVIEWER_INFO_MODAL) {
        return {
            ...state,
            showInterviewerInfoModal : false
        }
    }

    return state;
}

export default interviewerReducer;