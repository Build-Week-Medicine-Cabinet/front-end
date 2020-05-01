import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'


export const GET_DATA = 'get_data'
export const POST_DATA = 'post_data'
export const PUT_DATA = 'put_data'
export const DELETE_DATA = 'delete_data'


export const getDataAction = () => dispatch => {
    axiosWithAuth()
        .get('https://med-cabinet-tk-be.herokuapp.com/api/searches')
        .then(response => {
            console.log(response.data)
            dispatch({ type: GET_DATA, payload: response.data })
        })
        .catch(error => alert(error))
}

export const postDataAction = (formattedSearch, recordedSearch) => dispatch => {

    // api request to the flask API to input our data into the model
    axios.post(`https://medcabmodel.herokuapp.com/recommendations/${formattedSearch.effects}/${formattedSearch.flavors}/${formattedSearch.symptoms}`)
        .then(response1 => {
            console.log(response1.data)
            // const finalRecord = {
            //     ...recordedSearch,
            //     results: response.data
            // }
            const finalRecord = {
                effect: recordedSearch.effects,
                flavor: recordedSearch.flavors,
                symptoms: recordedSearch.symptoms,
                results: response1.data
            }
            console.log(finalRecord)
            axiosWithAuth()
                .post('https://med-cabinet-tk-be.herokuapp.com/api/searches', finalRecord)
                .then(response2 => {
                    
                    console.log(response2.data)
                    dispatch({ type: POST_DATA })
                    
                })
                .catch(error => alert(error))
        })
        .catch(error => alert(error))
}

export const putDataAction = (/* post form inputs, */ id) => dispatch => {
    axiosWithAuth()
        .put(`/${id}`, {/* post form inputs */})
        .then(response => {
            console.log(response.data)
            dispatch({ type: PUT_DATA, payload: response.data })
        })
        .catch(error => alert(error))
}

export const deleteDataAction = postToDeleteId => dispatch => {
    axiosWithAuth()
        .delete(`/${postToDeleteId}`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: DELETE_DATA, payload: response.data })
        })
        .catch(error => alert(error))
}