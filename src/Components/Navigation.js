import './Navigation.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <div className="Navigation">
    <Navbar bg="light" variant="light" className="justify-content-center">
  <Navbar.Brand href="#home">Follow</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Editor's Pick</Nav.Link>
    <Nav.Link href="#life">Life</Nav.Link>
    <Nav.Link href="#research">Research</Nav.Link>
    <Nav.Link href="#contribute">Contribute</Nav.Link>
    <Nav.Link href="#about">About</Nav.Link>
  </Nav>
  {/*
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form>
  */}
</Navbar>
</div>
  )
}

export default Navigation;
