import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";


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

/*************set initial form values and errors  ********************/
const initialFormValues = {
    username:'',
    password:'',
}

const initialFormErrors = {
    username: '',
    password:'',
}
/************* form validation/schema  ***********************/
const formValidation = yup.object().shape({
    username: yup
    .string()
    .min(4, "username must have at lest 4 characters")
    .required("username is required"),
    password: yup
    .string()
    .min(4, "password must be at least 4 charaters long")
    .required("password is required"),
})


export default function SignInForm (){

    const [user, setUser] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    /**************post user *****************/

    const postUser = user => {
        axios.post(url, friend)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.log('err')
        })
    }

    /*************enable/disable the form depending on what is inputted ************/
    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

    const onSubmit = evt => {
        evt.preventDefault()

        const user = {
            username: formValues.username,
            password: formValues.password
        }
         postUser(user)
        setFormValues(initialFormValues)
    }

    /*************validation for form values when they change *************/
    const onInputChange = evt => {
        const name = evt.target.name 
        const value = evt.target.name

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
                    [name]: er.errors[0]
                })
            })

            setFormValues({
                ...formValues,
                [name]: value,
            })
    }


    return (

        <form>
            <h2>Sign In</h2>
            <StyledWarnings>
                {formErrors.username}
                {formErrors.password}
            </StyledWarnings>
            <label>Username</label>
            <input 
            values={formValues.username}
            onChange={onInputChange}
            type="text"
            username="username"/>
            <label>Password</label>
            <input 
            type="text"
            password="password"
            values={formValues.password}
            onChange={onInputChange}/>
            <button disabled={formDisabled} onClick={onSubmit}>Submit</button>
        </form>

    )
}