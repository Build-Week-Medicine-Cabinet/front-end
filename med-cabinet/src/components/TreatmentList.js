import React, { useState } from 'react'
import styled from 'styled-components'
import TreatmentCard from './TreatmentCard'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { searchAction } from '../action-creators/mainActions'
import { useDispatch } from 'react-redux'


const TreatmentList = ({data}) => {
    const [searchInput, setSearchInput] = useState('')

    const dispatch = useDispatch()

    const updateSearch = event => {
        setSearchInput(event.target.value)
    }

    const submitSearch = event => {
        event.preventDefault()
        dispatch(searchAction(searchInput))
    }

    // filter by dataRender
    const dataToRender = data.filter(treatment => {
        return treatment.effect.concat(treatment.flavor).concat(treatment.symptoms).join(', ').includes(searchInput)
    })

    const TreatmentContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    const AddNewTreatment = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 80%;
        height: 80px;
        background-color: #2D9B79;
        color: white;
        border-radius: 15px;
        font-size: 3rem;
    `

    return (
        <TreatmentContainer>
            <Link to='/addtreatment' style={{minWidth: '80%', textDecoration: 'none'}}><AddNewTreatment>+</AddNewTreatment></Link>
            <SearchBar searchInput={searchInput} submitSearch={submitSearch} updateSearch={updateSearch}/>
            {dataToRender.map((treatment, index) => <TreatmentCard key={treatment.id} index={index} treatment={treatment} />)}
        </TreatmentContainer>
    )
}

export default TreatmentList