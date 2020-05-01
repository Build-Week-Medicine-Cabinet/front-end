import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../action-creators/mainActions'
import TreatmentList from './TreatmentList'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const UserPage = () => {
    // Redux hooks
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const refreshCounter = useSelector(state => state.refreshCounter)

    

    // get data for initial render
    useEffect(() => {
        axiosWithAuth()
            .get('/api/searches')
            .then(response => {
                console.log(response.data)
                dispatch(getDataAction(response.data))
            }) 
            .catch(error => alert(error))
     }, [refreshCounter])

    return (
        <div className='user-page'>
            <h1>My Treatment Recommendations</h1>
            <TreatmentList data={data} />
        </div>
    )
}

export default UserPage