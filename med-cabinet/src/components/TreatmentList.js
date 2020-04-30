import React from 'react'
import styled from 'styled-components'
import TreatmentCard from './TreatmentCard'


const TreatmentList = ({data}) => {
    const TreatmentContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    return (
        <TreatmentContainer>
            {data.map(treatment => <TreatmentCard key={treatment.id} treatment={treatment} />)}
        </TreatmentContainer>
    )
}

export default TreatmentList