import { GET_DATA, POST_DATA, PUT_DATA, DELETE_DATA, SET_POST_TO_EDIT, GET_DATA_BY_ID, SEARCH } from '../action-creators/mainActions'

const initialState = {
    data: [],
    expandedData: {},
    postToEdit: {},
    // counter makes sure app refreshes by getting updated data for the treatment list
    refreshCounter: 0,
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case POST_DATA:
            return {
                ...state,
                refreshCounter: state.refreshCounter + 1
            }
        case PUT_DATA: 
            return {
                ...state,
                refreshCounter: state.refreshCounter + 1,
                // clear postToEdit
                postToEdit: {}
            }
        case DELETE_DATA:
            return {
                ...state,
                refreshCounter: state.refreshCounter + 1,
            }
        case GET_DATA_BY_ID:
            return  {
                ...state,
                expandedData: action.payload
            }
        case SET_POST_TO_EDIT:
            return {
                ...state,
                postToEdit: action.payload
            }
        default:
            return state
    }
}