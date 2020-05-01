import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../action-creators/mainActions'
import TreatmentList from './TreatmentList'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const UserPage = () => {
    // Redux hooks
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    // get data for initial render
     useEffect(() => {
        axiosWithAuth()
            .get('/api/searches')
            .then(response => {
              dispatch(getDataAction(response.data))   
            }) 
            .catch(error => alert(error))
     }, [])
     

    return (
        <div className='user-page'>
            <h1>My Treatment Recommendations</h1>
            <TreatmentList data={data}/>
        </div>
    )
}

export default UserPage