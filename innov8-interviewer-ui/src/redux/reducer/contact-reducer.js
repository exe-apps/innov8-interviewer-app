import { 
    GET_CONTACT_LIST
} from '../constant/contact-constants';

const initialState = {
    contactList: []
}

const contactReducer = (state = initialState, action) => {
    if(action.type === GET_CONTACT_LIST) {
        return {
            ...state,
            contactList : action.payload
        }
    }

    return state;
}

export default contactReducer;