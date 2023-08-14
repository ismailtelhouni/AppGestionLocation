import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row, Stack } from 'react-bootstrap'
import backgroundImage4 from '../../img/living-room-1835923_1280.jpg'
import Search from '../../img/search.png'

const Home = () => {
    const [ ville , setVille ] = useState('')
    const [ category , setCategory ] = useState('')
    const [ prixMax , setPrixMax ] = useState()
    const [nombreChambres, setNombreChambres] = useState('')
    const [surfaceMin, setSurfaceMin] = useState('')


    const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer des actions avec les valeurs saisies (par exemple, effectuer une recherche)
    console.log('Ville:', ville);
    console.log('Catégorie:', category);
    console.log('Nombre de chambres:', nombreChambres);
    console.log('Surface min:', surfaceMin);
    console.log('Prix max:', prixMax);
  };
  return (
    <Container fluid>
        <Col>
            <div className="p-5 text-center bg-image" style={{ backgroundImage:`url(${backgroundImage4})`,height:'600px' }}>
                <div className='mask h-100' >
                    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                        <div>
                            <p className="fs-2 text-white fw-bold" style={{ textShadow:'2px 2px #383737' }}>
                                Gérez vos locations immobilières en toute simplicité
                            </p>
                        </div>
                        <div className="bg-white p-2 square rounded-2 w-75 py-3">
                            <Form onSubmit={handleSubmit}>
                                <Col >
                                    <Row className='g-2 mb-2'>
                                        <div className="w-75">
                                            <Col >
                                                <FloatingLabel controlId="floatingInputGrid" label="Ville">
                                                    <Form.Control type="text" value={ ville } onChange={ (e)=>setVille(e.target.value) } />
                                                </FloatingLabel>
                                            </Col>
                                        </div>
                                        <div className="w-25">
                                            <Col>
                                                <FloatingLabel controlId="floatingSelectGrid" label="Category" >
                                                    <Form.Select aria-label="Floating label select example">
                                                        <option>Open this select menu</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </FloatingLabel>
                                            </Col>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Row className='g-2 ms-1' style={{ width:'92%' }}>
                                            <Col>
                                                <FloatingLabel controlId="floatingInputGrid" label="Nombre (Chambres)">
                                                    <Form.Control type="number" value={ nombreChambres } onChange={ (e)=>setNombreChambres(e.target.value) } />
                                                </FloatingLabel>
                                            </Col>
                                            <Col>
                                                <FloatingLabel controlId="floatingInputGrid" label="Surface Min (m²)">
                                                    <Form.Control type="number" value={ surfaceMin } onChange={ (e)=>setSurfaceMin(e.target.value) }/>
                                                </FloatingLabel>
                                            </Col>
                                            <Col>
                                                <FloatingLabel controlId="floatingInputGrid" label="Prix Max (DH)">
                                                    <Form.Control type="number" value={ prixMax } onChange={ (e)=>setPrixMax(e.target.value) } />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <Col style={{ width:'66px',margin:'0px',padding:'0px' }}>
                                            <Button type="submit" style={{ height:'58px',marginTop:'16px' }}>
                                                <Image src={ Search } height={40} />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    </Container>
  )
}

export default Home
