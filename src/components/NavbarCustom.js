import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React , {useState}from 'react'
import { Navbar ,Container,Form,Button,FormControl,Nav} from 'react-bootstrap';


function NavbarCustom({onSearch}) {
    const [caracter,setCaracter]=useState('');
    const handleChange=(event)=>{
        setCaracter(event.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        onSearch(caracter);
        setCaracter(' ')
    }
    return (
        <Navbar bg="light" expand="lg" style={{width:"100%",dsiplay:"flex"}}>
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                    <Form className="d-flex" onSubmit={onSubmit}>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}
                            value={caracter}
                        />
                        <Button variant="outline-success" >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarCustom