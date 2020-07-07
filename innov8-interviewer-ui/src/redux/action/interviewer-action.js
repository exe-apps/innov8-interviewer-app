import { 
    GET_INTERVIEWER_LIST,
    ADD_INTERVIEWER,
    UPDATE_INTERVIEWER,
    DELETE_INTERVIEWER,
    SET_INTERVIEWER,
    SET_INTERVIEWER_ID,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL,
    SHOW_STAFFING_INFO_MODAL,
    CLOSE_STAFFING_INFO_MODAL,
    SHOW_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL
} from '../constant/interviewer-constants';
import { 
    INTERVIEWER_GET_API_URL,
    INTERVIEWER_POST_API_URL,
    INTERVIEWER_PUT_API_URL,
    INTERVIEWER_DELETE_API_URL
} from '../constant/service-urls';
import axios from 'axios';

export const getInterviewerList = () => {
    return async dispatch => {
        try{
            let response = await axios.get(INTERVIEWER_GET_API_URL);
            dispatch({type: GET_INTERVIEWER_LIST, payload: response.data});
        } catch (err) {
            // Implement error handling
            console.log(err);
        }
    }
}

export const addInterviewer = (body) => {
    return async dispatch => {
        try{
            await axios.post(INTERVIEWER_POST_API_URL, body);
            dispatch({type: ADD_INTERVIEWER});
            
            let response = await axios.get(INTERVIEWER_GET_API_URL);
            dispatch({type: GET_INTERVIEWER_LIST, payload: response.data});
        } catch (err) {
            // Implement error handling
            console.log(err);
        }
    }
}

export const updateInterviewer = (id, body) => {
    return async dispatch => {
        try{
            let INTERVIEWER_PUT_API_URL_WITH_ID = INTERVIEWER_PUT_API_URL.replace('{id}', id);
            
            await axios.put(INTERVIEWER_PUT_API_URL_WITH_ID, body);
            dispatch({type: UPDATE_INTERVIEWER});
            
            let response = await axios.get(INTERVIEWER_GET_API_URL);
            dispatch({type: GET_INTERVIEWER_LIST, payload: response.data});
        } catch (err) {
            // Implement error handling
            console.log(err);
        }
    }
}

export const deleteInterviewer = (id) => {
    return async dispatch => {
        try{
            let INTERVIEWER_DELETE_API_URL_WITH_URL = INTERVIEWER_DELETE_API_URL.replace('{id}', id);
            
            await axios.delete(INTERVIEWER_DELETE_API_URL_WITH_URL);
            dispatch({type: CLOSE_CONFIRMATION_MODAL});
            
            let response = await axios.get(INTERVIEWER_GET_API_URL);
            dispatch({type: GET_INTERVIEWER_LIST, payload: response.data});
        } catch (err) {
            // Implement error handling
            console.log(err);
        }
    }
}

export const setIdToDelete = (id) => {
    return dispatch => {
        dispatch(
            {
                type: SET_INTERVIEWER_ID,
                interviewerIdToDelete: id
            }
        )
    }
}

export const showInterviewerInfoModal = (interviewer) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_INTERVIEWER_INFO_MODAL,
                interviewerInfo: interviewer,
                showInterviewerInfoModal: true
            }
        )
    }
}

export const closeInterviewerInfoModal = () => {
    return dispatch => {
        dispatch(
            {
                type: CLOSE_INTERVIEWER_INFO_MODAL,
                showInterviewerInfoModal: false
            }
        )
    }
}

export const showUpdateStaffingInfoModal = (interviewerInfo) => {
    return dispatch => {
        dispatch(
            {
                type: SET_INTERVIEWER,
                interviewerInfo: interviewerInfo,
                showStaffingInfoModal: true,
                eventFlow: 'UPDATE'
            }
        )
    }
}

export const showStaffingInfoModal = (flow) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_STAFFING_INFO_MODAL,
                showStaffingInfoModal: true,
                eventFlow: flow
            }
        )
    }
}

export const closeStaffingInfoModal = () => {
    return dispatch => {
        dispatch(
            {
                type: CLOSE_STAFFING_INFO_MODAL,
                showStaffingInfoModal: false
            }
        )
    }
}

export const showConfirmationModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_CONFIRMATION_MODAL,
                showConfirmationModal: true
            }
        )
    }
}

export const closeConfirmationModal = () => {
    return dispatch => {
        dispatch(
            {
                type: CLOSE_CONFIRMATION_MODAL,
                showConfirmationModal: false
            }
        )
    }
}