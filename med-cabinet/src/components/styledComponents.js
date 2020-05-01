import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    margin: 20px 0;
`
export const CardContent = styled.div`
    text-align: left;
    width: 55%;
`
export const StyledButton = styled.button`
    background-color: #2D88FF;
    color: white;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 10px;
    cursor: pointer;
    margin: 2px;
    padding: 5px;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ListItem = styled.li`
    margin: 10px 0;
`