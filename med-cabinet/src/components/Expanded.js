import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Expanded = () => {
    const expandedData = useSelector(state => state.expandedData)
    

    // send user to find seller
    const findSellers = strainName => {
        const formattedStrainName = strainName.toLowerCase().replace(/ /g, '-')
        // history.push(`https://www.leafly.com/strains/${formattedStrainName}/availability`)
        window.location.replace(`https://www.leafly.com/strains/${formattedStrainName}/availability`)
    }

    return (
        <div>
            
            <h2>The Details!</h2>
            <ul>
                <li>Searched Symptoms: {expandedData.symptoms.join(', ')}</li>
                <li>Searched Flavors: {expandedData.flavor.join(', ')}</li>
                <li>Searched Effects: {expandedData.effect.join(', ')}</li>
                
            </ul>
            <h3>Recommended Strains</h3>
            {expandedData.results.map((result, index) => {
                return (
                    <div className='strainContainer' key={index+1}>
                        <h4>#{index+1} Strain: {result.strain}</h4>
                        <p>Type: {result.type}</p>
                        <p>Rating: {result.rating}</p>
                        <p>Effects: {result.effects.join(', ')}</p>
                        <p>Flavors: {result.flavor.join(', ')}</p>
                        <h6>Description</h6>
                        <p>{result.description}</p>
                        <button onClick={() => findSellers(result.strain)}>Find Local Sellers</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Expanded