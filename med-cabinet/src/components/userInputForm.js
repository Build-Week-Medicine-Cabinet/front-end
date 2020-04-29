import React, {useEffect, useState} from 'react'
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";



/************initial form values and errors *******/
const initialFormValues ={
    
    ailments:{
        depression: false, 
        inflammation: false, 
        insomnia: false, 
        lackOfAppetite: false,
        muscleSpasms: false, 
        nausea: false, 
        pain: false, 
        seizures: false, 
        stress: false,
        anxiety: false, 
        headaches: false, 
        fatigue: false,
    },
    effect: {
        happy: false, 
        relaxed:false,
        euphoric:false, 
        uplifted:false, 
        creative: false,
        sleepy: false, 
        energetic:false, 
        focused: false, 
        hungry: false, 
        talkative:false, 
        tingly: false,
        giggly:false, 
        aroused: false, 
        none: false,
    },
    flavor: {
        earthy: false, 
        sweet:false, 
        citrus:false, 
        pungent:false, 
        berry:false, 
        pine:false, 
        flowery:false, 
        woody:false,
        spicy:false, 
        herbal:false, 
        lemon:false, 
        tropical:false, 
        blueberry:false, 
        grape:false,
        orange:false, 
        pepper:false, 
        lime:false, 
        strawberry:false, 
        grapefruit:false, 
        sage:false,
        minty:false, 
        pineapple:false, 
        none:false, 
        lavender:false,  
        vanilla:false,  
        apple:false

    },
    
}

const initialFormErrors = {
    ailments: {},
}

/***************form validation not sure how to make just on of the ailments required ******************/
const formValidation = yup.object().shape({
        depression: yup.string(), 
        inflammation: yup.string(), 
        insomnia: yup.string(), 
        lackOfAppetite: yup.string(),
        muscleSpasms: yup.string(), 
        nausea: yup.string(), 
        pain: yup.string(), 
        seizures: yup.string(), 
        stress: yup.string(),
        anxiety: yup.string(), 
        headaches: yup.string(), 
        fatigue: yup.string(),
    //.required("at least one aliment is required"),
    effect: yup
    .string(),
    flavor: yup
    .string()

})

export default function UserInputForm () {

    const[userCard, setUserCard] = useState([])
    const[formValues, setFormValues] = useState(initialFormValues)
    const[formDisabled, setFormDisabled] = useState(true)
    const[formErrors, setFormErrors] = useState(initialFormErrors)

    const getUserCard = () => {
   /*     axios.get(url)
        .then(res => {
            setUserCard(res.data)
        })
        .catch( err => {
            console.log('err')
        }) */
    }

    useEffect(() => {
        getUserCard()
    }, [])

    const postUserCard = card => {
    /*    axios.post(url, card)
        .then(res => {
            setUserCard([res.data, ...userCard])
        })
        .catch( err => {
            console.log('err')
        })  */
    }

    useEffect(() => {
        formValidation.isValid(formValues)
        .then(valid => {
            setFormDisabled(!valid)
        })
    },[formValues])

    const onSubmit = evt => {
        evt.preventDefault()

        const newUserCard = {
            ailments: Object.keys(formValues.ailments)
            .filter(ailment => formValues.ailments,
                 [ailment] === true),
            effect: Object.keys(formValues.effect)
            .filter(effect => formValues.effect,
                [effect] === true),
            flavor: Object.keys(formValues.flavor)
            .filter(flavor => formValues.flavor,
                [flavor] === true)
        }
        postUserCard(newUserCard)
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
                    [name]: err.errors[0]
                })
            })

            setFormValues({
                ...formValues,
                [name]: value,
            })
    }

    const onCheckboxChange = (evt) => {
        const { name } = evt.target
        const isChecked = evt.target.checked
            console.log(evt.target.checked)
            console.log(formValues.ailments.depression)
           console.log('is working')
        setFormValues({
            ...formValues,
            ailments:{
                ...formValues.ailments,
                [name]: isChecked,
            }
        }) 
        
    }

    
    return(
        <form>
            <div>
               
            </div>
        <h2>Symptons</h2>
        <p>you must check at least one sympton</p>
        <label>depression</label><input type="checkbox" name="depression"
        checked={formValues.ailments.depression} onChange={onCheckboxChange}/>

        <label>inflammation</label><input type="checkbox" name="inflammation"
         checked={formValues.ailments.inflammation} onChange={onCheckboxChange}/>

        <label>insomnia</label><input type="checkbox" name="insomnia"
         checked={formValues.ailments.insomnonia} onChange={onCheckboxChange}/>

        <label>lack of appetite</label><input type="checkbox" name="lackOfAppetite"
         checked={formValues.ailments.lackOfAppetite} onChange={onCheckboxChange}/>

        <label>muscle spasms</label><input type="checkbox" name="muscleSpasms"
         checked={formValues.ailments.muscleSpasms} onChange={onCheckboxChange}/>

        <label>nausea</label><input type="checkbox" name="nausea"
         checked={formValues.ailments.nausea} onChange={onCheckboxChange}/>

        <label>pain</label><input type="checkbox" name="pain"
         checked={formValues.ailments.pain} onChange={onCheckboxChange}/>

        <label>seizures</label><input type="checkbox" name="seizures"
         checked={formValues.ailments.seizures} onChange={onCheckboxChange}/>

        <label>stress</label><input type="checkbox" name="stress"
         checked={formValues.ailments.stress} onChange={onCheckboxChange}/>

        <label>anxiety</label><input type="checkbox" name="anxiety"
         checked={formValues.ailments.anxiety} onChange={onCheckboxChange}/>

        <label>headaches</label><input type="checkbox" name="headaches"
         checked={formValues.ailments.headaches} onChange={onCheckboxChange}/>

        <label>fatigue</label><input type="checkbox" name="fatigue"
         checked={formValues.ailments.fatigue} onChange={onCheckboxChange}/>

        <h4>effect</h4>
            <label>happy</label><input type="checkbox" name="fatigue"
         checked={formValues.ailments.happy} onChange={onCheckboxChange}/>
        
        <h4>flavor</h4><input type="text" name="flavor"
        values={formValues.flavor} onChange={onInputChange}/>
        <button onClick={onSubmit} disabled={formDisabled}>submit</button>
        </form>
    )
}


