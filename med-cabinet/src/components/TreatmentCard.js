import React from 'react'

const TreatmentCard = props => {
    return (
        <div className='treatment'>
            <ul>
                <li>Strain: {props.treatment.strain}</li>
                <li>Dose: {props.treatment.dose}</li>
                <li>Intake Method: {props.treatment.intakeMethod}</li>
                <li>Intake Schedule: {props.treatment.intakeSchedule}</li>
            </ul>
        </div>
    )
}

export default TreatmentCard