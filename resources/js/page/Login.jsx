import React, { useState } from 'react'

import { Button, Form, Image, Row, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


import key from '../../img/double-4758967_1280.png'
import ContainerForm from '../components/ContainerForm'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ checkMeOut , setCheckMeOut ] = useState('')
    const [ loading , setLoading ] = useState(false)
    const [ validated , setValidated ] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log('email:', email);
            console.log('password:', password);
            console.log('checkMeOut:', checkMeOut);
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            loginUser()
        }
        setValidated(true)

    }

    const loginUser = async (e)=>{
        setLoading(true)
        const formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)
        formData.append('remember_token',checkMeOut)

        try{
            const response = await axios.post(`/api/Login`,formData)
            console.log(response.data)
            Swal.fire({
                position:'top-end',
                icon:'success',
                title:'Your task has been saved.',
                showConfirmButton:false,
                timer:1500
            })
            setLoading(false)
            navigate('/')
        }catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
  return (
    <ContainerForm validated={validated} image={ key } handleSubmit={handleSubmit}  >
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" value={ email } onChange={ (e)=>setEmail(e.target.value) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" value={ password } onChange={ (e)=>setPassword(e.target.value) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" checked={ checkMeOut } onChange={ (e)=>setCheckMeOut(e.target.checked) } />
        </Form.Group>
        <Row>
            <Button variant="primary" type="submit" className='w-25'>
            { loading ? <Spinner animation="border" variant="light" size="sm" /> : "Connecter" }
            </Button>
            <span className='w-75 pt-2'> Vous n'avez pas de compte ? <Link to='/register_Front' >S'incrire </Link> </span>
        </Row>
    </ContainerForm>
    // <Container >
    //     <Row className='g-2'>
    //         <div className='w-50'>
    //             <Image src={ key } width='100%' />
    //         </div>
    //         <div className='w-50 d-flex flex-column justify-content-center align-item-center '>
    //             <Form onSubmit={handleSubmit} className=''>
    //                 <Form.Group className="mb-3" controlId="formGroupEmail">
    //                     <Form.Label>Email address</Form.Label>
    //                     <Form.Control type="email" placeholder="Enter email" value={ email } onChange={ (e)=>setEmail(e.target.value) } />
    //                 </Form.Group>
    //                 <Form.Group className="mb-3" controlId="formGroupPassword">
    //                     <Form.Label>Password</Form.Label>
    //                     <Form.Control type="password" placeholder="Password" value={ password } onChange={ (e)=>setPassword(e.target.value) } />
    //                 </Form.Group>
    //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //                     <Form.Check type="checkbox" label="Check me out" checked={ checkMeOut } onChange={ (e)=>setCheckMeOut(e.target.checked) } />
    //                 </Form.Group>
    //                 <Row>
    //                     <Button variant="primary" type="submit" className='w-25'>
    //                         Connecter
    //                     </Button>
    //                     <span className='w-75 pt-2'> Vous n'avez pas de compte ? <Link to='/register' >S'incrire </Link> </span>
    //                 </Row>
    //             </Form>
    //         </div>
    //     </Row>
    // </Container>
  )
}

export default Login
