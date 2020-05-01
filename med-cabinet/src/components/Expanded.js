import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, StyledButton } from './styledComponents'
import styled from 'styled-components'

const Expanded = () => {
    const expandedData = useSelector(state => state.expandedData)

    // send user to find seller
    const findSellers = strainName => {
        const formattedStrainName = strainName.toLowerCase().replace(/ /g, '-')
        // history.push(`https://www.leafly.com/strains/${formattedStrainName}/availability`)
        window.location.replace(`https://www.leafly.com/strains/${formattedStrainName}/availability`)
    }

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    return (
        <Container>
            <Card>
                <h2>The Details!</h2>
                <ul>
                    <li>Searched Symptoms: {expandedData.symptoms.join(', ')}</li>
                    <li>Searched Flavors: {expandedData.flavor.join(', ')}</li>
                    <li>Searched Effects: {expandedData.effect.join(', ')}</li>
                    
                </ul>
            </Card>
            
            <h3>Recommended Strains</h3>
            {expandedData.results.map((result, index) => {
                return (
                    <Card className='strainContainer' key={index+1}>
                        <h3>#{index+1} Strain: {result.strain}</h3>
                        <p>Type: {result.type}</p>
                        <p>Rating: {result.rating}</p>
                        <p>Effects: {result.effects.join(', ')}</p>
                        <p>Flavors: {result.flavor.join(', ')}</p>
                        <h4>Description</h4>
                        <p>{result.description}</p>
                        <StyledButton onClick={() => findSellers(result.strain)}>Find Local Sellers</StyledButton>
                    </Card>
                )
            })}
        </Container>
    )
}

export default Expanded