import React from 'react'
import styled from 'styled-components'


const SearchBar = props => {
    
    const SearchInput = styled.input`
        width: 220px;
    `

    const Form = styled.form`
        margin-top: 10px;
    `

    return (
        <Form>
            <SearchInput type='text' value={props.searchInput} placeholder="Search by effects, flavors, or symptoms" onChange={props.updateSearch} />
        </Form>
    )
}

export default SearchBar