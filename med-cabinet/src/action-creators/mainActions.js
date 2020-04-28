import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_DATA = 'get_data'
export const POST_DATA = 'post_data'
export const PUT_DATA = 'put_data'
export const DELETE_DATA = 'delete_data'

export const getDataAction = () => dispatch => {
    axiosWithAuth()
        .get('')
        .then(response => {
            console.log(response.data)
            dispatch({ type: GET_DATA, payload: response.data })
        })
        .catch(error => alert(error))
}

export const postDataAction = (name, age, height) => dispatch => {
    axiosWithAuth()
        .post('', { name, age, height })
        .then(response => {
            console.log(response.data)
            dispatch({ type: POST_DATA, payload: response.data })
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