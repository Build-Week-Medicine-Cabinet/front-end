import React, {useEffect, useState } from 'react'
import * as yup from "yup";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { putDataAction } from '../action-creators/mainActions'

const StyledInput = styled.form `
    display:flex;
    flex-direction:column;
    align-items:center;  
`

const initialFormErrors = {
    Symptoms:''
}

/************form validation or schema ****************/
const formValidation = yup.object().shape({
   Symptoms: yup
   .string()
   .required("at least one sympton is required"),
   Effects: yup
   .string(),
   Flavors: yup
   .string(),
})



export default function EditForm () {
    const dispatch = useDispatch()
    const history = useHistory()
    const postToEdit = useSelector(state => state.postToEdit)
    
    const initialFormValues = {
        Symptoms: postToEdit.symptoms.join(','),
        Effects: postToEdit.effect.join(','),
        Flavors: postToEdit.flavor.join(','),
    }

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    

    /**********setup post new user no url to post to yet ********/
    // Juan's put request
    const putSearch = search => {
        console.log(search)
        // if effects or flavors are blank assign the value 'none'
        if (search.Effects === '' && search.Flavors === ''){
            search.Effects = 'none'
            search.Flavors = 'none'
        } else if (search.Flavors === '') {
            search.Flavors = 'none'
        } else if (search.Effect === '') {
            search.Effect = 'none'
        }
        // for flask (data science) API (needs to be insertable into url)
        const formattedSearch = {
            // eliminate any spaces between the values in the string
            effects: search.Effects.toLowerCase().split(', ').join(',').replace(/ /g, '-'),
            flavors: search.Flavors.toLowerCase().split(', ').join(',').replace(/ /g, '-'),
            symptoms: search.Symptoms.toLowerCase().split(', ').join(',').replace(/ /g, '-')
        }
        // for Node backend API
        const recordedSearch = {
            effects: search.Effects.toLowerCase().split(', '),
            flavors: search.Flavors.toLowerCase().split(', '),
            symptoms: search.Symptoms.toLowerCase().split(', ')
        }
        console.log(formattedSearch)
        console.log(recordedSearch)
        dispatch(putDataAction(formattedSearch, recordedSearch, postToEdit.id))
        history.push('/userpage')
    }

    /**********cannot input form until data is inputed by user for username and password *******/
    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])


   const submitSearch = event => {
        event.preventDefault()

        const newSearch = {
            Symptoms: formValues.Symptoms,
            Effects: formValues.Effects,
            Flavors: formValues.Flavors,
        }
        
        setFormValues(initialFormValues)
        putSearch(newSearch)
    }

    const onInputChange = event => {
        const name = event.target.name
        const value = event.target.value

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

   
   
    return(
        <StyledInput>
         <div>
             <div>
                 {formErrors.Symptoms}
             </div>
             <h3>Symptoms</h3>
            <p>This is a list of symptoms you can search from 
                if you are inputting multiple items please seperate with a comma (,)</p> 
                <p>depression, inflammation, insomnia, lack of appetite, muscle spasms, nausea, pain, seizures,
                    stress, anxiety, headaches, fatigue
                </p>
            <label>Symptom/s</label>
            <input type='text' name='Symptoms' 
            value={formValues.Symptoms} onChange={onInputChange}/>
        </div>
        <h4>Effects</h4>
        <p>This is a list of effects please seperate multiple effects with a comma (,) </p>
        <p>happy, relaxed, euphoric, uplifted, creative, sleepy, energetic, focused, hungry, talkative, tingly,
            giggly, aroused
        </p>
        <div>
        <label>Effect/s</label>
        <input type='text' name='Effects'
        value={formValues.Effects} onChange={onInputChange}/> 
         </div>

        <div>
            <h4>flavors</h4>
            <p>This is a list of flavors please seperate multiple flavors with a coma (,)</p>
            <p>earthy, sweet, citrus, pungent, berry, pine, flowery, woody, spicy, herbal,
                lemon, tropical, blueberry, grape, orange, pepper, line strawberry, grapefruit, sage,
                minty, pineaple, lavender, vanilla, apple
            </p>
            <label>Flavor/s</label>
            <input type='text' name='Flavors'
            value={formValues.Flavors} onChange={onInputChange}/>
        </div>
        <div>

        <button onClick={submitSearch} disabled={formDisabled}>submit</button>

        </div>
        </StyledInput>
    )
}
