import { 
    GET_CONTACT_LIST
} from '../constant/contact-constants';
import { CONTACT_GET_API_URL } from '../constant/service-urls';
import axios from 'axios';

export const getContactList = () => {
    return dispatch => {
        return axios.get(CONTACT_GET_API_URL)
        .then(response => {
            dispatch({type: GET_CONTACT_LIST, payload: response.data.contacts});
        })
        .catch(error => {
            // Implement dispatch error here
        })
    }
}