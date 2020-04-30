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
        ailment:{
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
    //.required("at least one aliment is required")
        },
    effect: {
        happy: yup.string(), 
        relaxed: yup.string(),
        euphoric: yup.string(),
        uplifted:yup.string(),
        creative: yup.string(),
        sleepy: yup.string(),
        energetic: yup.string(),
        focused: yup.string(),
        hungry: yup.string(), 
        talkative: yup.string(),
        tingly: yup.string(),
        giggly:yup.string(),
        aroused: yup.string(),
        none: yup.string(),
         },
    flavor: {
        earthy: yup.string(), 
        sweet:yup.string(),
        citrus:yup.string(),
        pungent:yup.string(),
        berry:yup.string(),
        pine:yup.string(),
        flowery:yup.string(),
        woody:yup.string(),
        spicy:yup.string(),
        herbal:yup.string(),
        lemon:yup.string(),
        tropical:yup.string(),
        blueberry:yup.string(),
        grape:yup.string(),
        orange:yup.string(),
        pepper:yup.string(),
        lime:yup.string(),
        strawberry:yup.string(),
        grapefruit:yup.string(),
        sage:yup.string(),
        minty:yup.string(),
        pineapple:yup.string(),
        none:yup.string(),
        lavender:yup.string(),
        vanilla:yup.string(),
        apple:yup.string(),
        }

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
           // ailments: Object.keys(formValues.ailments)
           // .filter(ailment => formValues.ailments,
           //      [ailment] === true),
           // effect: Object.keys(formValues.effect)
           // .filter(effect => formValues.effect,
           //     [effect] === true),
           // flavor: Object.keys(formValues.flavor)
           // .filter(flavor => formValues.flavor,
           //     [flavor] === true)
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
            <label>happy</label><input type="checkbox" name="happy"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>
        
        <label>relaxed</label><input type="checkbox" name="relaxed"
         checked={formValues.effect.relaxed} onChange={onCheckboxChange}/>

        <label>euphoric</label><input type="checkbox" name="euphoric"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>uplifte</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>creative</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>sleepy</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>energetic</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>focused</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>hungy</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>talkative</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>tingly</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>giggly</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>giggly</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>aroused</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <label>none</label>label><input type="checkbox" name="none"
         checked={formValues.effect.happy} onChange={onCheckboxChange}/>

        <h4>flavor</h4>
        
        <label>earthy</label><input type="text" name="earthy"
        values={formValues.flavor.earthy} onChange={onInputChange}/>

        <label>sweet</label><input type="text" name="sweet"
        values={formValues.flavor.sweet} onChange={onInputChange}/>

        <label>citrus</label><input type="text" name="citrus"
        values={formValues.flavor.citrus} onChange={onInputChange}/>

        <label>pungent</label><input type="text" name="pungent"
        values={formValues.flavor.pungent} onChange={onInputChange}/>

        <label>berry</label><input type="text" name="berry"
        values={formValues.flavor.berry} onChange={onInputChange}/>

        <label>pine</label><input type="text" name="pine"
        values={formValues.flavor.pine} onChange={onInputChange}/>

        <label>flowery</label><input type="text" name="flowery"
        values={formValues.flavor.flowery} onChange={onInputChange}/>

        <label>woody</label><input type="text" name="woody"
        values={formValues.flavor.woody} onChange={onInputChange}/>

        <label>spicy</label><input type="text" name="spicy"
        values={formValues.flavor.spicy} onChange={onInputChange}/>

        <label>herbal</label><input type="text" name="herbal"
        values={formValues.flavor.herbal} onChange={onInputChange}/>

        <label>lemon</label><input type="text" name="lemon"
        values={formValues.flavor.lemon} onChange={onInputChange}/>

        <label>tropical</label><input type="text" name="tropical"
        values={formValues.flavor.tropical} onChange={onInputChange}/>

        <label>blueberry</label><input type="text" name="bluebery"
        values={formValues.flavor.blueberry} onChange={onInputChange}/>

        <label>grape</label><input type="text" name="grape"
        values={formValues.flavor.grape} onChange={onInputChange}/>

        <label>orange</label><input type="text" name="orange"
        values={formValues.flavor.orange} onChange={onInputChange}/>

        <label>pepper</label><input type="text" name="pepper"
        values={formValues.flavor.pepper} onChange={onInputChange}/>

        <label>lime</label><input type="text" name="lime"
        values={formValues.flavor.lime} onChange={onInputChange}/>

        <label>strawberry</label><input type="text" name="strawberry"
        values={formValues.flavor.strawberry} onChange={onInputChange}/>

        <label>grapefruit</label><input type="text" name="grapefruit"
        values={formValues.flavor.grapefruit} onChange={onInputChange}/>

        <label>sage</label><input type="text" name="sage"
        values={formValues.flavor.sage} onChange={onInputChange}/>

        <label>minty</label><input type="text" name="minty"
        values={formValues.flavor.minty} onChange={onInputChange}/>

        <label>pineapple</label><input type="text" name="pineapple"
        values={formValues.flavor.pineapple} onChange={onInputChange}/>

        <label>lavender</label><input type="text" name="lavender"
        values={formValues.flavor.lavender} onChange={onInputChange}/>

        <label>vanilla</label><input type="text" name="vanilla"
        values={formValues.flavor.vanilla} onChange={onInputChange}/>

        <label>apple</label><input type="text" name="apple"
        values={formValues.flavor.apple} onChange={onInputChange}/>

        <label>none</label><input type="text" name="none"
        values={formValues.flavor.none} onChange={onInputChange}/>

        <button onClick={onSubmit} disabled={formDisabled}>submit</button>
        </form>
    )
}


