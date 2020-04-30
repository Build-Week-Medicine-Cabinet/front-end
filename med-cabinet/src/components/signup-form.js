import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'


/*********styled components *************/
const StyledForm = styled.form`
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
const Warning = styled.div`
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
    ageVerification: false,
}

const initialFormErrors = {
    username: '',
    password:'',
    ageVerification: '',
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
    ageVerification: yup
        .boolean()
        .oneOf([true] , "age must be at least 18")
})



export default function SignupForm () {
    
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    const history = useHistory() // will be used to redirect user to login page
    // const dispatch = useDispatch() // will be used to send message to state


    /**********Juan's post user registration request********/
    const registerUser = user => {
        console.log(user)
        axios.post('https://med-cabinet-tk-be.herokuapp.com/api/auth/register', user)
            .then(response => {
                console.log(response)
                setFormValues(initialFormValues)
                history.push('/login') // redirect user to login page
            })
            .catch(error => {
                alert(error) // let user see the error as it could be that they created an account that already exists
            })
    }

    /**********cannot input form until data is inputed by user for username and password *******/
    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

   const submitUser = event => {
        event.preventDefault()

        const newUser = {
            username: formValues.username,
            password: formValues.password,
            over18: formValues.ageVerification
        }
        setFormValues(initialFormValues)
        registerUser(newUser)
    }

    const onInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        console.log(formValues)
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
    }

    /************check box  change*******/
    const checkboxChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.checked,
        })
    }

    return(
       <StyledForm onSubmit={submitUser}>
        <h2>Sign up Form</h2>
        
            <Warning>
                {formErrors.username}
                {formErrors.password}
                {formErrors.ageVerification}
            </Warning>
            <label>username</label>
            <input 
            type="text"
            name="username"
            value={formValues.name}
            onChange={onInputChange}/>

            <label>password</label>
            <input 
            type="password"
            name="password"
            value={formValues.password}
            onChange={onInputChange}/>

            <label>You must be 18 to use</label>
            <input
            type="checkbox"
            name="ageVerification"
            checked={formValues.ageVerification}
            onChange={checkboxChange}
            />

            <button onClick={submitUser} disabled={formDisabled}>submit</button>
            
        </StyledForm>
    )
}