import { 
    GET_INTERVIEWER_LIST,
    ADD_INTERVIEWER,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL,
    SHOW_STAFFING_INFO_MODAL,
    CLOSE_STAFFING_INFO_MODAL
} from '../constant/interviewer-constants';
import { 
    INTERVIEWER_GET_API_URL,
    INTERVIEWER_POST_API_URL
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

export const showStaffingInfoModal = () => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_STAFFING_INFO_MODAL,
                showStaffingInfoModal: true
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