import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

const initialFormValues = {
    username:'',
    password:'',
}

const initialFormErrors = {
    username: '',
    password:'',
}

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
        // postUser(user)
        setFormValues(initialFormValues)
    }

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