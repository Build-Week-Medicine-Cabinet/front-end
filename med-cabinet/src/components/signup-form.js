import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";

const SignUpForm = styled.div`
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
`

const initialFormValues = {
    username:'',
    password:''
}

const initialFormErrors = {
    username: '',
    password:''
}

const formValidation = yup.object().shape({
    username: yup
    .string()
    .min(4, "username must have at lest 4 characters")
    .required("username is required"),
    password: yup
    .string()
    .min(4, "password must be at least 4 charaters long")
    .required("password is required")
})



export default function SignUpForm () {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    const postNewUser = newUser => {

        axios.post(url,newUser)
        .then(res => {
            setNewUser([res.data, ...users])
        })
        .catch(err => {
            console.log('err')
        })
    }

    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

    const onSubmit = evt => {
        evt.preventDefault()

        const newUser = {
            username: formValues.username,
            password: formValues.password
        }
        postUser(newUser)
        setFormValues(initialFormValues)
    }

    const onInputChange = evt => {
        const name = evt.taget.name
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
                [name]: err.erors[0]
            })
        })
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    reuturn(
       <SignUpForm>
        <h2>Sign up Form</h2>
        <form>
            <label>username</label>
            <input 
            type="text"
            username="username"
            errors={formErrors.username}
            value={initialFormValues.name}
            onChange={changeValues}/>

            <label>password</label>
            <input 
            type="text"
            password="password"
            errors={formErrors.password}
            value={initialFormValues.password}
            onChange={changeValues}/>

            <button onClick={onSubmit} disabled={formDisabled}>submit</button>
            </form>
        </SignUpForm>
    )

}