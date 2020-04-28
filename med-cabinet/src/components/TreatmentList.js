import React from 'react'
import Treatment from './TreatmentCard'

const TreatmentList = ({data}) => {
    return (
        <div className='treatment-list'>
            {data.map(treatment => <TreatmentCard key={treatment.id} treatment={treatment} />)}
        </div>
    )
}

export default TreatmentList