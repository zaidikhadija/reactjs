import React from 'react';
import {Navbar,Nav,Form,Button,FormControl,ListGroup} from "react-bootstrap"

const ComponentOne = () =>{
  return(
    <>
  <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Nos catégories</Nav.Link>


      <Nav.Link href="#features">Nouveautés</Nav.Link>
      <Nav.Link href="#pricing">Ventes Flash</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Rechercher un produit" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <ListGroup>
  <ListGroup.Item>New style</ListGroup.Item>
  <ListGroup.Item variant="primary">Mode Homme</ListGroup.Item>
  <ListGroup.Item variant="secondary">Mode Femme</ListGroup.Item>
  <ListGroup.Item variant="success">Mode Enfant</ListGroup.Item>
</ListGroup>
  </>
  )
}
export default ComponentOne

 