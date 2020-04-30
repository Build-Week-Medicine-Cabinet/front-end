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
    //.required("at least one aliment is required")
        
    
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
        

})

export default function UserInputForm () {

    const[userCard, setUserCard] = useState([])
    const[formValues, setFormValues] = useState(initialFormValues)
    const[formDisabled, setFormDisabled] = useState(true)
    const[formErrors, setFormErrors] = useState(initialFormErrors)

    const getUserCard = () => {
   //    axios.get(url)
   //     .then(res => {
   //         setUserCard(res.data)
   //     })
   //    .catch( err => {
   //         console.log('err')
   //     }) 
    }

    useEffect(() => {
        getUserCard()
    }, [])

    const postUserCard = userCard => {
      //  axios.post(url, card)
      //  .then(res => {
      //      setUserCard([res.data, ...userCard])
      //  })
      //  .catch( err => {
      //      console.log('err')
      //  })  
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
            .filter(ailment => formValues.ailments
                [ailment] ===true)
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

    const onCheckChange = evt => {
        const{ name } = evt.target
        const isChecked = evt.target.checked
        setFormValues({
            ...formValues,
            effect:{
                ...formValues.effect,
                [name]: isChecked,
            }
        })
    }

    const onChangeBox = evt => {
        const{ name } = evt.target
        const isChecked = evt.target.checked
        setFormValues({
            ...formValues,
            taste:{
                ...formValues.taste,
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
         checked={formValues.effect.happy} onChange={onCheckChange}/>
        
        <label>relaxed</label><input type="checkbox" name="relaxed"
         checked={formValues.effect.relaxed} onChange={onCheckChange}/>

        <label>euphoric</label><input type="checkbox" name="euphoric"
         checked={formValues.effect.ephoric} onChange={onCheckChange}/>

        <label>uplifted</label><input type="checkbox" name="uplifted"
         checked={formValues.effect.uplifted} onChange={onCheckChange}/>

        <label>creative</label><input type="checkbox" name="creative"
         checked={formValues.effect.creative} onChange={onCheckChange}/>

        <label>sleepy</label><input type="checkbox" name="sleepy"
         checked={formValues.effect.sleepy} onChange={onCheckChange}/>

        <label>energetic</label><input type="checkbox" name="energetic"
         checked={formValues.effect.energetic} onChange={onCheckChange}/>

        <label>focused</label><input type="checkbox" name="focused"
         checked={formValues.effect.focused} onChange={onCheckChange}/>

        <label>hungry</label><input type="checkbox" name="hungry"
         checked={formValues.effect.hungry} onChange={onCheckChange}/>

        <label>talkative</label><input type="checkbox" name="talkative"
         checked={formValues.effect.talkative} onChange={onCheckChange}/>

        <label>tingly</label><input type="checkbox" name="tingly"
         checked={formValues.effect.tingly} onChange={onCheckChange}/>

        <label>giggly</label><input type="checkbox" name="fatigue"
         checked={formValues.effect.happy} onChange={onCheckChange}/>

        <label>aroused</label><input type="checkbox" name="aroused"
         checked={formValues.effect.aroused} onChange={onCheckChange}/>

        <label>none</label>label><input type="checkbox" name="none"
         checked={formValues.effect.none} onChange={onCheckChange}/>

        <h4>flavor</h4>
        
        <label>earthy</label><input type='checkbox' name="earthy"
        values={formValues.flavor.earthy} onChange={ onChangeBox}/>

        <label>sweet</label><input type='checkbox' name="sweet"
        values={formValues.flavor.sweet} onChange={ onChangeBox}/>

        <label>citrus</label><input type='checkbox' name="citrus"
        values={formValues.flavor.citrus} onChange={ onChangeBox}/>

        <label>pungent</label><input type='checkbox' name="pungent"
        values={formValues.flavor.pungent} onChange={ onChangeBox}/>

        <label>berry</label><input type='checkbox' name="berry"
        values={formValues.flavor.berry} onChange={ onChangeBox}/>

        <label>pine</label><input type='checkbox' name="pine"
        values={formValues.flavor.pine} onChange={ onChangeBox}/>

        <label>flowery</label><input type='checkbox' name="flowery"
        values={formValues.flavor.flowery} onChange={ onChangeBox}/>

        <label>woody</label><input type='checkbox' name="woody"
        values={formValues.flavor.woody} onChange={ onChangeBox}/>

        <label>spicy</label><input type='checkbox' name="spicy"
        values={formValues.flavor.spicy} onChange={ onChangeBox}/>

        <label>herbal</label><input type='checkbox' name="herbal"
        values={formValues.flavor.herbal} onChange={ onChangeBox}/>

        <label>lemon</label><input type='checkbox' name="lemon"
        values={formValues.flavor.lemon} onChange={ onChangeBox}/>

        <label>tropical</label><input type='checkbox' name="tropical"
        values={formValues.flavor.tropical} onChange={ onChangeBox}/>

        <label>blueberry</label><input type='checkbox' name="bluebery"
        values={formValues.flavor.blueberry} onChange={ onChangeBox}/>

        <label>grape</label><input type='checkbox' name="grape"
        values={formValues.flavor.grape} onChange={ onChangeBox}/>

        <label>orange</label><input type='checkbox' name="orange"
        values={formValues.flavor.orange} onChange={ onChangeBox}/>

        <label>pepper</label><input type='checkbox' name="pepper"
        values={formValues.flavor.pepper} onChange={ onChangeBox}/>

        <label>lime</label><input type='checkbox' name="lime"
        values={formValues.flavor.lime} onChange={ onChangeBox}/>

        <label>strawberry</label><input type='checkbox' name="strawberry"
        values={formValues.flavor.strawberry} onChange={ onChangeBox}/>

        <label>grapefruit</label><input type='checkbox' name="grapefruit"
        values={formValues.flavor.grapefruit} onChange={ onChangeBox}/>

        <label>sage</label><input type='checkbox' name="sage"
        values={formValues.flavor.sage} onChange={ onChangeBox}/>

        <label>minty</label><input type='checkbox' name="minty"
        values={formValues.flavor.minty} onChange={ onChangeBox}/>

        <label>pineapple</label><input type='checkbox' name="pineapple"
        values={formValues.flavor.pineapple} onChange={ onChangeBox}/>

        <label>lavender</label><input type='checkbox' name="lavender"
        values={formValues.flavor.lavender} onChange={ onChangeBox}/>

        <label>vanilla</label><input type='checkbox' name="vanilla"
        values={formValues.flavor.vanilla} onChange={ onChangeBox}/>

        <label>apple</label><input type='checkbox' name="apple"
        values={formValues.flavor.apple} onChange={ onChangeBox}/>

        <label>none</label><input type='checkbox' name="none"
        values={formValues.flavor.none} onChange={ onChangeBox}/>

        <button onClick={onSubmit} disabled={formDisabled}>submit</button>
        </form>
    )
}


