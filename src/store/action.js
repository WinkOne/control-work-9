import axiosApi from "../axios-api";


export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR';

export const fetchContactRequest = () => {
    return{type: FETCH_CONTACT_REQUEST}
};
export const fetchContactSuccess = (response) => {
    return{type: FETCH_CONTACT_SUCCESS, response}
};
export const fetchContactError = () => {
    return{type: FETCH_CONTACT_ERROR}
};

export const FETCH_CONTACT_ID_REQUEST = 'FETCH_CONTACT_ID_REQUEST';
export const FETCH_CONTACT_ID_SUCCESS = 'FETCH_CONTACT_ID_SUCCESS';
export const FETCH_CONTACT_ID_ERROR = 'FETCH_CONTACT_ID_ERROR';

export const fetchContactIdRequest = () => {
    return{type: FETCH_CONTACT_ID_REQUEST}
};
export const fetchContactIdSuccess = (dataContact) => {
    return{type: FETCH_CONTACT_ID_SUCCESS, dataContact}
};
export const fetchContactIdError = () => {
    return{type: FETCH_CONTACT_ID_ERROR}
};

export const fetchPostContact = (data) => {
    return async dispatch => {
        await axiosApi.post('/contacts.json', data);
        dispatch(getContact())

    };
};

export const getContact = () => {
    return dispatch => {
        dispatch(fetchContactRequest());
        axiosApi.get('/contacts.json').then(response => {
            dispatch(fetchContactSuccess(response.data));
        }, error => {
            dispatch(fetchContactError(error));
        });
    }
};

export const    getContactID = (id) => {
    return dispatch => {
        dispatch(fetchContactIdRequest());
        axiosApi.get(`/contacts/${id}.json`).then(response => {
            dispatch(fetchContactIdSuccess(response.data));
        }, error => {
            dispatch(fetchContactIdError(error));
        });
    }
};

export const deleteContact = (id) => {
    return  dispatch => {
        axiosApi.delete(`/contacts/${id}.json`).then(res =>{
            dispatch(getContact())
        }, error => {
            dispatch(fetchContactError(error));
        })
    }
};
export const editContact = (id, data) => {
    return async dispatch => {
        await axiosApi.put(`/contacts/${id}.json`, data);
        dispatch(getContact())
    }
};
