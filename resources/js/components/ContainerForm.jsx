import React from 'react'
import { Container, Form, Image, Row } from 'react-bootstrap'
import key from '../../img/double-4758967_1280.png'


const ContainerForm = ({image , handleSubmit , children , validated}) => {
  return (
    <Container >
        <Row className='g-2'>
            <div className='w-50'>
                <Image src={ image } width='90%' />
            </div>
            <div className='w-50 d-flex flex-column justify-content-center align-item-center '>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className=''>
                    { children }
                </Form>
            </div>
        </Row>
    </Container>
  )
}

export default ContainerForm
