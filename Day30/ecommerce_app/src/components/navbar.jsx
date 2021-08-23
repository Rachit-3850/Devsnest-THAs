
import  { Navbar , Nav , Container}  from 'react-bootstrap';
const Navbars = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Redux Cart</Navbar.Brand>
          <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="Cart">
          Cart
          </Nav.Link>
    </Nav>
        </Container>
      </Navbar>
    )
}
export default Navbars