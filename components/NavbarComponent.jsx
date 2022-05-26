import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'next/link'

export default function NavbarComponent(){
    return (

    <Navbar collapseOnSelect className="my-bg" variant="">
        <Container>
          <Navbar.Brand href="#home" className="text-orange fw-bold">VOC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="me-auto my-text">
                <Nav.Link className="my-text">Home</Nav.Link>
            </Nav>            
          </Navbar.Collapse>

          <Nav className="ml-auto">
          </Nav>
        </Container>
    </Navbar>

    )
}