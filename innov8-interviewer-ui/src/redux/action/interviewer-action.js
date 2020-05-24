import { 
    GET_INTERVIEWER_LIST,
    SHOW_INTERVIEWER_INFO_MODAL,
    CLOSE_INTERVIEWER_INFO_MODAL
} from '../constant/interviewer-constants';
import { INTERVIEWER_GET_API_URL } from '../constant/service-urls';
import axios from 'axios';

export const getInterviewerList = () => {
    return dispatch => {
        return axios.get(INTERVIEWER_GET_API_URL)
        .then(response => {
            dispatch({type: GET_INTERVIEWER_LIST, payload: response.data});
        })
        .catch(error => {
            // Implement dispatch error here
        })
    }
}

export const showInterviewerInfoModal = (interviewer) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_INTERVIEWER_INFO_MODAL,
                interviewerInfo: interviewer,
                showInterviewerInfoModal: true,
            }
        )
    }
}

export const closeInterviewerInfoModal = () => {
    return dispatch => {
        dispatch(
            {
                type: CLOSE_INTERVIEWER_INFO_MODAL,
                showInterviewerInfoModal: false,
            }
        )
    }
}