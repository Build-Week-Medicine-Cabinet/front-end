import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from 'react-router-dom'


/****************stylling ********************/
const StyledSignIn = styled.form `
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid rgb(210, 210, 210 );
    border-radius: 5px;
    box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
    margin: 8px;
    padding: 12px;
    background-color:white;
    width: 50%;
    margin-left:25%;
`

const StyledWarnings = styled.div `
    width: 100%;
    font-size:1.5rem;
    color: red;
    box-shadow: none;
    margin: 1% 0;
`
/************set initial form values and errors ******************/
const initialFormValues = {
    username:'',
    password:'',
}

const initialFormErrors = {
    username: '',
    password:'',
}
/************form validation or schema ****************/
const formValidation = yup.object().shape({
    username: yup
        .string()
        .min(4, "username must have at least 4 characters")
        .required("username is required"),
    password: yup
        .string()
        .min(4, "password must be at least 4 charaters long")
        .required("password is required"),
})




export default function SignupForm () {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    const history = useHistory()

    /**************Juan's loginUser function logs user in and stores token *****************/

    const loginUser = user => {
        console.log(formValues)
        axios.post('https://med-cabinet-tk-be.herokuapp.com/api/auth/login', user)
        .then(response => {
            console.log(response)
            setFormValues(initialFormValues)
            // save token to local storage
            console.log(response)
            localStorage.setItem('token', response.data.token)
            // push to userpage
            history.push('/userpage')
        })
        .catch(err => {
            alert(err)
        })

    }

    /**********cannot input form until data is inputed by user for username and password *******/
    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

    useEffect(() => {

    },[users])
   const submitUser = event => {
        event.preventDefault()

        const newUser = {
            username: formValues.username,
            password: formValues.password
        }
        setFormValues(initialFormValues)
        loginUser(user)
    }


    /*************validation for form values when they change *************/
    const onInputChange = evt => {
        const name = evt.target.name 
        const value = evt.target.value

        yup
            .reach(formValidation, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })

            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })

        setFormValues({
            ...formValues,
            [name]: value,
        })
        console.log(formValues)

    }

   
    return(
       <StyledSignIn onSubmit={submitUser}>
        <h2>Sign up Form</h2>
        
            <StyledWarnings>
                {formErrors.username}
                {formErrors.password}
            </StyledWarnings>
            <label>username</label>
            <input 

            value={formValues.username}
            onChange={onInputChange}
            type="text"
            name="username"/>
            <label>Password</label>

            <input 
            type="password"
            name="password"
            value={formValues.password}
            onChange={onInputChange}/>

            <button onClick={submitUser} disabled={formDisabled}>submit</button>
            
        </StyledSignIn>
    )
}