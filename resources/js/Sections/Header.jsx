import React from 'react'
import { Link } from 'react-router-dom'
import { Button , Container, Nav, NavDropdown, Navbar  } from 'react-bootstrap'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ width:'100%' }}>
        <div className="container" style={{ width:'65%' }}>
            <Link className="navbar-brand" to="/" style={{ fontWeight:700 , color:'#EF5E4E',fontSize:'36px' }}> Logo </Link>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll">
                        <li className="nav-item d-flex align-items-center">
                            <div className="d-grid gap-2 mx-auto hero-search-button!" style={{ backgroundColor:'transparent',border:'1px solid #EF5E4E' }} >
                                <Link to="/login_Front" variant="outline-light" type="button" className="btn" style={{ color:'#EF5E4E',fontWeight:'bold' }} data-bs-toggle="modal" data-bs-target="#exampleModalSeConnecter">Se connecter</Link>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    // <Navbar>
    //   <Container >
    //     <Navbar.Brand href="/">Logo</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Header
