import { 
    GET_INTERVIEWER_LIST,
    ADD_INTERVIEWER,
    UPDATE_INTERVIEWER,
    SET_INTERVIEWER,
    SET_INTERVIEWER_ID,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL,
    SHOW_STAFFING_INFO_MODAL,
    CLOSE_STAFFING_INFO_MODAL,
    SHOW_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL
} from '../constant/interviewer-constants';

const initialState = {
    interviewerList: [],
    interviewerInfo: {},
    interviewerIdToDelete: '',
    showInterviewerInfoModal: false,
    showStaffingInfoModal: false,
    eventFlow: 'ADD',
    showConfirmationModal: false,
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

    if(action.type === UPDATE_INTERVIEWER) {
        return {
            ...state,
            showStaffingInfoModal : false,
        }
    }

    if(action.type === SET_INTERVIEWER) {
        return {
            ...state,
            interviewerInfo : action.interviewerInfo,
            showStaffingInfoModal: action.showStaffingInfoModal,
            eventFlow: action.eventFlow
        }
    }

    if(action.type === SET_INTERVIEWER_ID) {
        return {
            ...state,
            interviewerIdToDelete: action.interviewerIdToDelete
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
            showStaffingInfoModal : true,
            eventFlow : action.eventFlow
        }
    }

    if(action.type === CLOSE_STAFFING_INFO_MODAL) {
        return {
            ...state,
            interviewerInfo: {},
            showStaffingInfoModal : false
        }
    }

    if(action.type === SHOW_CONFIRMATION_MODAL) {
        return {
            ...state,
            showConfirmationModal: true
        }
    }

    if(action.type === CLOSE_CONFIRMATION_MODAL) {
        return {
            ...state,
            showConfirmationModal: false
        }
    }

    return state;
}

export default interviewerReducer;