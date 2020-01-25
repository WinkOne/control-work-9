import {FETCH_CONTACT_ID_SUCCESS, FETCH_CONTACT_SUCCESS} from "./action";

const initialState = {
    contacts: {},
    contact: {}
};
const reducer = (state = initialState, action) => {
    if (action.type === FETCH_CONTACT_SUCCESS) {
        return {...state, contacts: action.response}
    }
    if (action.type === FETCH_CONTACT_ID_SUCCESS){
        return {...state, contact: action.dataContact}
    }
    return state;
};

export default reducer;