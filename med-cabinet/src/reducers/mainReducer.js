import { GET_DATA, POST_DATA, PUT_DATA, DELETE_DATA } from '../action-creators/mainActions'

const initialState = {
    data: [{
        id: 1,
        strainName: 'strain 1',
        dose: 'dose 1',
        intakeMethod: 'intake method 1',
        intakeSchedule: 'intake schedule 1'
    }, 
    {
        id: 2,
        strainName: 'strain 2',
        dose: 'dose 2',
        intakeMethod: 'intake method 2',
        intakeSchedule: 'intake schedule 2'
    }],
    treatmentFormInputs: {
        ailment: '',
        effect: '',
        flavor: '',
    }
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
        default:
            return state
    }
}