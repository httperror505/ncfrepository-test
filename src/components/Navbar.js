import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function NavigationBar () {

    const redirectToNCF = () => {
        window.open('https://www.ncf.edu.ph/');
    }

    return (

        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                <Image src={require("../assets/ncf-logo-green.png")} alt='NCF Logo' className='ncf-logo-navbar' onClick={redirectToNCF}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">NCF Official Website</Nav.Link>
                        <Nav.Link href="#about">Login</Nav.Link>
                        <Nav.Link href="#education">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavigationBar;