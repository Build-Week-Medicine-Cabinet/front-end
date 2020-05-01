import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'


export const GET_DATA = 'get_data'
export const POST_DATA = 'post_data'
export const PUT_DATA = 'put_data'
export const DELETE_DATA = 'delete_data'
export const SET_POST_TO_EDIT = 'set_post_to_edit'
export const GET_DATA_BY_ID = 'get_data_by_id'
export const SEARCH = 'search'


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

export const putDataAction = (formattedSearch, recordedSearch, id) => dispatch => {
    axios.post(`https://medcabmodel.herokuapp.com/recommendations/${formattedSearch.effects}/${formattedSearch.flavors}/${formattedSearch.symptoms}`)
        .then(response1 => {
            console.log(response1.data)
            const finalRecord = {
                effect: recordedSearch.effects,
                flavor: recordedSearch.flavors,
                symptoms: recordedSearch.symptoms,
                results: response1.data
            }
            console.log(finalRecord)
            axiosWithAuth()
                .put(`https://med-cabinet-tk-be.herokuapp.com/api/searches/${id}`, finalRecord )
                .then(response => {
                    console.log(response.data)
                    dispatch({ type: PUT_DATA })
                })
                .catch(error => alert(error))
        })
        .catch(error => alert(error))
}

export const deleteDataAction = postToDeleteId => dispatch => {
    axiosWithAuth()
        .delete(`https://med-cabinet-tk-be.herokuapp.com/api/searches/${postToDeleteId}`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: DELETE_DATA })
        })
        .catch(error => alert(error))
}

export const getDataByIdAction = postToExpandId => dispatch => {
    axiosWithAuth()
        .get(`https://med-cabinet-tk-be.herokuapp.com/api/searches/${postToExpandId}`)
        .then(response => {
            console.log(response)
            dispatch({type: GET_DATA_BY_ID, payload: response.data})
        })
        .catch(error => alert(error))
}

export const setPostToEditAction = postToEdit => {
    console.log(postToEdit)
    return {type: SET_POST_TO_EDIT, payload: postToEdit}
}

export const searchAction = searchValue => {
    return { type: SEARCH, payload: searchValue }
}