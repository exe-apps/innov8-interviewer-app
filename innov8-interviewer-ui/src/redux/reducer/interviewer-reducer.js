import { 
    GET_INTERVIEWER_LIST,
    ADD_INTERVIEWER,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL,
    SHOW_STAFFING_INFO_MODAL,
    CLOSE_STAFFING_INFO_MODAL
} from '../constant/interviewer-constants';

const initialState = {
    interviewerList: [],
    interviewerInfo: {},
    showInterviewerInfoModal: false,
    showStaffingInfoModal: false
}

const interviewerReducer = (state = initialState, action) => {

    if(action.type === GET_INTERVIEWER_LIST) {
        return {
            ...state,
            interviewerList : action.payload
        }
    }

    if(action.type === ADD_INTERVIEWER) {
        return {
            ...state,
            showStaffingInfoModal : false
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

    if(action.type === SHOW_STAFFING_INFO_MODAL) {
        return {
            ...state,
            showStaffingInfoModal : true
        }
    }

    if(action.type === CLOSE_STAFFING_INFO_MODAL) {
        return {
            ...state,
            showStaffingInfoModal : false
        }
    }

    return state;
}

export default interviewerReducer;