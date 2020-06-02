import { 
    GET_REQUIREMENT_LIST
} from '../constant/requirement-constants';
import { REQUIREMENT_GET_API_URL } from '../constant/service-urls';
import axios from 'axios';

export const getRequirementsList = () => {
    return dispatch => {
        return axios.get(REQUIREMENT_GET_API_URL)
        .then(response => {
            dispatch({type: GET_REQUIREMENT_LIST, payload: response.data.requirements});
        })
        .catch(error => {
            // Implement dispatch error here
        })
    }
}