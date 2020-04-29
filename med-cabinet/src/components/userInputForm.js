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
    effect: '',
    flavor: '',
    
}

const initialFormErrors = {
    ailments: {},
}

/***************form validation not sure how to make just on of the ailments required ******************/
const formValidation = yup.object().shape({
    ailments:{
        depression: string(), 
        inflammation: string(), 
        insomnia: string(), 
        lackOfAppetite: string(),
        muscleSpasms: string(), 
        nausea: string(), 
        pain: string(), 
        seizures: string(), 
        stress: string(),
        anxiety: string(), 
        headaches: string(), 
        fatigue: string(),
    },
    effect: yup
    .string(),
    flavor: yup
    .string()

})

export default function UserInputForm () {


    return(
        <form>
        <h2>Ailments</h2>
        <label>depression</label><input type="checkbox" name="depression"/>
        <labe>inflammation</labe><input type="checkbox" name="inflammation"/>
        <labe>insomnia</labe><input type="checkbox" name="insomnia"/>
        <labe>lack of appetite</labe><input type="checkbox" name="lackOfAppetite"/>
        <labe>muscle spasms</labe><input type="checkbox" name="muscleSpasms"/>
        <labe>nausea</labe><input type="checkbox" name="nausea"/>
        <labe>pain</labe><input type="checkbox" name="pain"/>
        <labe>seizures</labe><input type="checkbox" name="seizures"/>
        <labe>stress</labe><input type="checkbox" name="stress"/>
        <labe>anxiety</labe><input type="checkbox" name="anxiety"/> 
        <labe>headaches</labe><input type="checkbox" name="headaches"/>
        <labe>fatigue</labe><input type="checkbox" name="fatigue"/>
        <label>effect</label><input type="text" name="effect"/>
        <label>flavor</label><input type="text" name="flavor"/>
        </form>
    )
}

