import React, { useState } from 'react'


import key from '../../img/new-house-man-standing-front-open-door-smiling-woman-inviting-house.jpg'
import { Button, Form, Row, Spinner } from 'react-bootstrap'
import ContainerForm from '../components/ContainerForm'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [ typeUser , setTypeUser ] = useState('client')
    const [ lastName , setLastName ] = useState('')
    const [ name , setName ] = useState('')
    const [ dateOfBirth , setDateOfBirth ] = useState('')
    const [ birthPlace , setBirthPlace ] = useState('')
    const [ Cin , setCin ] = useState('')
    const [ nationalIdentityCard , setNationalIdentityCard ] = useState('')
    const [ nationalIdentityCardError , setNationalIdentityCardError ] = useState('')
    const [ phone , setPhone ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ validated , setValidated ] = useState(false);
    const [ loading , setLoading ] = useState(false)
    const [ errors , setErrors ] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            // console.log('- name : ', name)
            // console.log('- last name : ',lastName)
            // console.log('- date : ',dateOfBirth)
            // console.log('- cin : ',Cin)
            // console.log('- phone :',phone)
            // console.log('- birth place :',birthPlace)
            // console.log('- email : ',email)
            // console.log('- file :',nationalIdentityCard)
            // console.log('- password : ',password)
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            createUser()
        }
        setValidated(true)
    }
    const createUser = async (e)=>{
        setLoading(true)
        const formData = new FormData()
        formData.append('name',lastName)
        formData.append('prenom',name)
        formData.append('date_naissance',dateOfBirth)
        formData.append('lieu_naissance',birthPlace)
        formData.append('cin',Cin)
        formData.append('Tele',phone)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('FileData',nationalIdentityCard)

        try {
            const response = await axios.post(`/api/Register`,formData)
            console.log(response)
            Swal.fire({
                position:'top-end',
                icon:'success',
                title:'Your task has been saved.',
                showConfirmButton:false,
                timer:1500
            })
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error)
            setErrors(error.response.data.errors)
        }
    }
    const handleTypeChange = (e)=>{
        setTypeUser(e.target.value);
        if(e.target.value == 'client'){
            setBirthPlace('')
            setCin('')
            setNationalIdentityCard('')
            setDateOfBirth(null)
            setPhone('')
        }
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setNationalIdentityCard(selectedFile);
            setNationalIdentityCardError(null); // Réinitialiser l'erreur si le fichier est valide
        } else {
            setNationalIdentityCard(null); // Réinitialiser le fichier s'il est invalide
            setNationalIdentityCardError('Veuillez sélectionner un fichier PDF.');
        }
    }
  return (
    <ContainerForm      validated={validated}   image={ key }   handleSubmit={handleSubmit} >
        <Form.Select    value={ typeUser }      onChange={ handleTypeChange }   className="mb-3" aria-label="Default select example">
            <option     value="client">Client</option>
            <option     value="proprietaire">Proprietaire</option>
        </Form.Select>
        <Form.Group     as={Row}        className="mb-3"    controlId="formGroupLastName">
            <Form.Label column sm="2"   className='w-25'>Last name</Form.Label>
            <Form.Control required      type="text"         className='w-75'    placeholder="Enter your Last name"  value={ lastName }  onChange={ (e)=>setLastName(e.target.value) } />
            <Form.Control.Feedback      className='text-center'                 type='invalid' >Please choose a Last name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group     as={Row}        className="mb-3"    controlId="formGroupName">
            <Form.Label column sm="2"   className='w-25' >name</Form.Label>
            <Form.Control required      type="text"         className='w-75'    placeholder="Enter your name"       value={ name }      onChange={ (e)=>setName(e.target.value) } />
            <Form.Control.Feedback      className='text-center'                 type='invalid' >Please choose a name.</Form.Control.Feedback>
        </Form.Group>
        { typeUser === 'proprietaire' ?
            <>
                <Form.Group             as={Row}            className="mb-3"    controlId="formGroupDateOfBirth">
                    <Form.Label         column              sm="2"              className='w-25'>date of birth</Form.Label>
                    <Form.Control       required={ typeUser === 'proprietaire' ? true : false }     type="date"     className='w-75'    value={ dateOfBirth }   onChange={ (e)=>setDateOfBirth(e.target.value) } />
                    <Form.Control.Feedback  className='text-center'             type='invalid' >Please choose a date of brith.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group             as={Row}            className="mb-3"    controlId="formGroupBirthPlace">
                    <Form.Label         column              sm="2"              className='w-25'>Birth Place</Form.Label>
                    <Form.Control       required={ typeUser === 'proprietaire' ? true : false }     type="text"     className='w-75'    placeholder="Enter your Birth Place"    value={ birthPlace }    onChange={ (e)=>setBirthPlace(e.target.value) } />
                    <Form.Control.Feedback  className='text-center'             type='invalid' >Please choose a brith place.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group             as={Row}            className="mb-3"    controlId="formGroupCin">
                    <Form.Label         column sm="2"       className='w-25'>Cin</Form.Label>
                    <Form.Control       required={ typeUser === 'proprietaire' ? true : false }     type="text"     className='w-75'    placeholder="Enter Cin"                 value={ Cin }           onChange={ (e)=>setCin(e.target.value) } />
                    <Form.Control.Feedback  className='text-center'             type='invalid' >Please choose a cin.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group             as={Row}            controlId="formFile" className="mb-3">
                    <Form.Label         column              sm="2"               className='w-25'>National Identity Card</Form.Label>
                    <Form.Control       type="file"         className='w-75'     required={ typeUser === 'proprietaire' ? true : false } onChange={handleFileChange}     accept='.pdf' />
                    <Form.Control.Feedback  className='text-center'             type='invalid' ></Form.Control.Feedback>
                </Form.Group>
                <Form.Group             as={Row}            className="mb-3"     controlId="formGroupPhone">
                    <Form.Label         column              sm="2"               className='w-25'>Phone</Form.Label>
                    <Form.Control       required={ typeUser === 'proprietaire' ? true : false }     type="text"     className='w-75'    placeholder="Enter phone"               value={ phone }         onChange={ (e)=>setPhone(e.target.value) }  />
                    <Form.Control.Feedback className='text-center' type='invalid' >Please choose a phone.</Form.Control.Feedback>
                </Form.Group>
            </>
        : null }

        <Form.Group     as={Row}        className="mb-3"    controlId="formGroupEmail">
            <Form.Label column          sm="2"              className='w-25'>Email address</Form.Label>
            <Form.Control required      type="email"        className='w-75'       placeholder="Enter email"        value={ email }     onChange={ (e)=>setEmail(e.target.value) } />
            <Form.Control.Feedback      className='text-center'     type='invalid' > { email.length==0 ? 'Please choose a email.' : 'email invalid' } </Form.Control.Feedback>
        </Form.Group>
        <Form.Group     as={Row}        className="mb-3"    controlId="formGroupPassword">
            <Form.Label column          sm="2"              className='w-25'>Password</Form.Label>
            <Form.Control required      type="password"     className='w-75'       placeholder="Password"           value={ password }  onChange={ handlePasswordChange } />
            <Form.Control.Feedback className='text-center' type='invalid' >Please choose a password.</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" className='w-25'>
            { loading ? <Spinner animation="border" variant="light" size="sm" /> : "S'incrire" }
        </Button>
    </ContainerForm>
  )
}

export default Register
// isInvalid={validated && !passwordValid} className={ validated ?  passwordValid ? 'w-75' :'w-75 is-invalid' : 'w-75' }
