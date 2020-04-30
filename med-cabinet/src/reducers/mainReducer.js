import { GET_DATA, POST_DATA, PUT_DATA, DELETE_DATA } from '../action-creators/mainActions'

const initialState = {
    data: [{
        effect: ["Happy", "Creative"],
        flavor: ["Citrus", "Spicy"],
        symptoms: ["Pain", "Stress", "Insomnia"],
        results:[
           "stain name 1",
           "stain name 2",
           "stain name 3",
           "stain name 4",
           "stain name 5"
        ]
    }, 
    {
        effect: ["Happy", "Creative"],
        flavor: ["Citrus", "Spicy"],
        symptoms: ["Pain", "Stress", "Insomnia"],
        results: [
           "stain name 1",
           "stain name 2",
           "stain name 3",
           "stain name 4",
           "stain name 5"
        ]
    }],
    expandedData: {},
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case POST_DATA:
            return {
                ...state,
                data: action.payload,
                // clear form after post
            }
        case PUT_DATA: 
            return {
                ...state,
                data: action.payload,
                // clear form after post
            }
        case DELETE_DATA:
            return {
                ...state,
                data: action.payload,
            }
        // case CREATE_LOGIN_MESSAGE: // customizes the login message
        //     return {
        //         ...state,
        //         loginMessage: action.payload
        //     }
        default:
            return state
    }
}