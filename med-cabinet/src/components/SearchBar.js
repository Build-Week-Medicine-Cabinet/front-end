import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { searchAction } from '../action-creators/mainActions'

const SearchBar = props => {
    
    const SearchInput = styled.input`
        width: 140px;
    `

    return (
        <form>
            <SearchInput type='text' value={props.searchInput} placeholder="Search by effects, flavors, symptoms" onChange={props.updateSearch} />
            <button onClick={props.submitSearch}>Submit Search</button>
        </form>
    )
}

export default SearchBar