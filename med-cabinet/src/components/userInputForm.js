import React, {useEffect, useState } from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";


const StyledInput = styled.form `
    display:flex;
    flex-direction:column;
    align-items:center;
    
    
`
const initialFormValues = {
    Symptoms:'',
    Effects:'',
    Flavors: '',
}

const initialFormErrors = {
    Symptons:''
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



export default function SignupForm () {
    const [search, setSearch] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

/************axios get *******************/
const getSearch = () => {
   // axios.get(url)
   // .then(res => {
   //     setSearch(res.data)
  //  })
  //  .catch(err => {
  //      console.log(err)
  //  })
}

    useEffect(() => {
        getSearch()
    },[])

    /**********setup post new user no url to post to yet ********/
    const postSearch = (search) => {

        // axios.post(url, user)
        // .then(res => {
        //     setUsers([...users, res.data])
        //     console.log(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    /**********cannot input form until data is inputed by user for username and password *******/
    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

    useEffect(() => {

    },[search])

   const submitSearch = event => {
        event.preventDefault()

        const newSearch = {
            Symptons: formValues.Symptons,
            Effects: formValues.Effects,
            Flavors: formValues.Flavors,
        }
        postSearch(newSearch)
        setFormValues(initialFormValues)
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
                 {formErrors.Symptons}
             </div>
             <h3>Symptons</h3>
            <p>This is a list of symptons you can search from 
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
