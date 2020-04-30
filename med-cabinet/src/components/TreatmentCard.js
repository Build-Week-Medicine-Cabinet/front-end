import React from 'react'
import styled from 'styled-components'

const TreatmentCard = props => {
    const TreatmentCard = styled.div`
        border: 2px solid black;
        border-radius: 10px;
        padding: 10px;
        width: 80%;
        margin: 20px 0;
    `
    const StyledButton = styled.button`
        background-color: #2D88FF;
        color: white;
        font-size: 1rem;
        border: 2px solid white;
        border-radius: 10px;
        cursor: pointer;
        margin: 2px;
    `
    const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-around;
    `

    return (
        <TreatmentCard>
            <h2>Card Title</h2>
            <ul>
                <li>Symptoms: {props.treatment.symptoms.join(', ')}</li>
                <li>Flavors: {props.treatment.flavor.join(', ')}</li>
                <li>Effects: {props.treatment.effect.join(', ')}</li>
                {props.treatment.results.map((result, index) => <li key={index+1}>#{index+1} Strain: {result}</li>)}
            </ul>
            <ButtonContainer>
                <StyledButton style={{backgroundColor: 'green'}}>Edit</StyledButton>
                <StyledButton>More Information</StyledButton>
                <StyledButton style={{backgroundColor: 'red'}}>Delete</StyledButton>
            </ButtonContainer>
            
        </TreatmentCard>
    )
}

export default TreatmentCard