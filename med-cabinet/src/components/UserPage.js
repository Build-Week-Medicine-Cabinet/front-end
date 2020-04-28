import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../action-creators/mainActions'
import TreatmentList from './TreatmentList'

const UserPage = () => {
    // Redux hooks
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    // get data for initial render
    useEffect(() => {
        dispatch(getDataAction())
    }, [])

    return (
        <div className='user-page'>
            <h1>User Page</h1>
            <TreatmentList data={data}/>
        </div>
    )
}

export default UserPage