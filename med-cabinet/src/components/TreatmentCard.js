import React from 'react'
import styled from 'styled-components'
import { setPostToEditAction, deleteDataAction, getDataByIdAction } from '../action-creators/mainActions'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Card, CardContent, StyledButton, ButtonContainer, ListItem } from './styledComponents'


const TreatmentCard = props => {
    const { effect, flavor, symptoms, results } = props.treatment

    const history = useHistory()
    const dispatch = useDispatch()

    const enableEditing = () => {
        dispatch(setPostToEditAction(props.treatment))
        console.log(props.treatment)
        history.push('/edittreatment')
    }

    const deletePost = () => {
        dispatch(deleteDataAction(props.treatment.id))
        console.log(props.treatment.id)
        history.push('/userpage')
    }

    const getPostById = () => {
        dispatch(getDataByIdAction(props.treatment.id))
        console.log(props.treatment.id)
        // give time to get data
        setTimeout(()=>{ history.push('/expanded') }, 2000)
    }

    return (
        
        <Card>
            <h2>{`Treatment ${props.index+1}`}</h2>
            <CardContent>
                <ul>
                    <ListItem>Symptoms: {symptoms.join(', ')}</ListItem>
                    <ListItem>Flavors: {flavor.join(', ')}</ListItem>
                    <ListItem>Effects: {effect.join(', ')}</ListItem>
                    {results.map((result, index) => <ListItem key={index+1}>#{index+1} Strain: {result}</ListItem>)}
                </ul>
            </CardContent>
            <ButtonContainer>
                <StyledButton onClick={enableEditing} style={{backgroundColor: 'green'}}>Edit</StyledButton>
                <StyledButton onClick={getPostById}>More Information</StyledButton>
                <StyledButton onClick={deletePost} style={{backgroundColor: 'red'}}>Delete</StyledButton>
            </ButtonContainer>
        </Card>
    )
}

export default TreatmentCard