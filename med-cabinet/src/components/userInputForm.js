// import React, {useEffect, useState} from 'react'
// import * as yup from "yup";
// import styled from "styled-components";
// import axios from "axios";



// /************initial form values and errors *******/
// const initialFormValues ={
    
//     ailments:{
//         depression: false, 
//         inflammation: false, 
//         insomnia: false, 
//         lackOfAppetite: false,
//         muscleSpasms: false, 
//         nausea: false, 
//         pain: false, 
//         seizures: false, 
//         stress: false,
//         anxiety: false, 
//         headaches: false, 
//         fatigue: false,
//     },
//     effect: '',
//     flavor: '',
    

// }

// const initialFormErrors = {
//     ailments: {},
// }

// /***************form validation not sure how to make just on of the ailments required ******************/
// const formValidation = yup.object().shape({
//     ailments:{
//         depression: yup.string(), 
//         inflammation: yup.string(), 
//         insomnia: yup.string(), 
//         lackOfAppetite: yup.string(),
//         muscleSpasms: yup.string(), 
//         nausea: yup.string(), 
//         pain: yup.string(), 
//         seizures: yup.string(), 
//         stress: yup.string(),
//         anxiety: yup.string(), 
//         headaches: yup.string(), 
//         fatigue: yup.string(),
//     }
//     .required("at least one aliment is required"),
//     effect: yup
//     .string(),
//     flavor: yup
//     .string()

// })

// export default function UserInputForm () {

//     const[userCard, setUserCard] = useState([])
//     const[formValues, setFormValues] = useState(initialFormValues)
//     const[formDisabled, setFormDisabled] = useState(true)
//     const[formErrors, setFormErrors] = useState(initialFormErrors)

//     const getUserCard = () => {
//         axios.get(url)
//         .then(res => {
//             setUserCard(res.data)
//         })
//         .catch( err => {
//             console.log('err')
//         })
//     }

//     useEffect(() => {
//         getUserCard()
//     }, [])

//     const postUserCard = card => {
//         axios.post(url, card)
//         .then(res => {
//             setUserCard([res.data, ...userCard])
//         })
//         .catch( err => {
//             console.log('err')
//         })
//     }

//     useEffect(() => {
//         formValidation.isValid(formValues)
//         .then(valid => {
//             setFormDisabled(!valid)
//         })
//     },[formValues])

//     const onSubmit = evt => {
//         evt.preventDefault()

//         const newUserCard = {
//             ailments: object.keys(formValues.ailments)
//             .filter(ailments => formValues.ailments [ailment] === true)
//         }
//         postUserCard(newUserCard)
//         setFormValues(initialFormValues)
//     }


//     const onInputChange = evt => {
//         const name = evt.target.name 
//         const value = evt.target.name

//         yup
//             .reach(formValidation, name)
//             .validate(value)
//             .then(valid => {
//                 setFormErrors({
//                     ...formErrors,
//                     [name]: '',
//                 })
//             })

//             .catch(err => {
//                 setFormErrors({
//                     ...formErrors,
//                     [name]: er.errors[0]
//                 })
//             })

//             setFormValues({
//                 ...formValues,
//                 [name]: value,
//             })
//     }

//     const onCheckboxChange = evt => {
//         const { name } = evt.target
//         const isChecked = evt.target.isChecked

//         setFormValues({
//             ...formValues,
//             ailments:{
//                 ...formValues.ailments,[name]: isChecked,
//             }
//         })
//     }

    
//     return(
//         <form>
//         <h2>Ailments</h2>
//         <label>depression</label><input type="checkbox" name="depression"
//         checked={formValues.ailments.depression} onCheckboxChange={onCheckboxChange}/>

//         <label>inflammation</label><input type="checkbox" name="inflammation"
//          checked={formValues.ailments.inflammation} onCheckboxChange={onCheckboxChange}/>

//         <label>insomnia</label><input type="checkbox" name="insomnia"
//          checked={formValues.ailments.insomnia} onCheckboxChange={onCheckboxChange}/>

//         <label>lack of appetite</label><input type="checkbox" name="lackOfAppetite"
//          checked={formValues.ailments.lackOfAppetite} onCheckboxChange={onCheckboxChange}/>

//         <label>muscle spasms</label><input type="checkbox" name="muscleSpasms"
//          checked={formValues.ailments.muscleSpasms} onCheckboxChange={onCheckboxChange}/>

//         <label>nausea</label><input type="checkbox" name="nausea"
//          checked={formValues.ailments.nausea} onCheckboxChange={onCheckboxChange}/>

//         <label>pain</label><input type="checkbox" name="pain"
//          checked={formValues.ailments.pain} onCheckboxChange={onCheckboxChange}/>

//         <label>seizures</label><input type="checkbox" name="seizures"
//          checked={formValues.ailments.seizures} onCheckboxChange={onCheckboxChange}/>

//         <label>stress</label><input type="checkbox" name="stress"
//          checked={formValues.ailments.stress} onCheckboxChange={onCheckboxChange}/>

//         <label>anxiety</label><input type="checkbox" name="anxiety"
//          checked={formValues.ailments.anxiety} onCheckboxChange={onCheckboxChange}/>

//         <label>headaches</label><input type="checkbox" name="headaches"
//          checked={formValues.ailments.headaches} onCheckboxChange={onCheckboxChange}/>

//         <label>fatigue</label><input type="checkbox" name="fatigue"
//          checked={formValues.ailments.fatigue} onCheckboxChange={onCheckboxChange}/>
//}


//         <label>effect</label><input type="text" name="effect" 
//         values={formValues.effect} onChange={onInputChange}/>
        

//         <label>flavor</label><input type="text" name="flavor"
//         values={formValues.flavor} onChange={onInputChange}/>
//         <button onClick={onSubmit} disabled={disabled}>submit</button>
//         </form>
//     )
// }

