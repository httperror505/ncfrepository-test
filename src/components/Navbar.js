import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  const redirectToNCF = () => {
    window.open("https://www.ncf.edu.ph/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={require("../assets/ncf-logo-green.png")}
            alt="NCF Logo"
            className="ncf-logo-navbar"
            onClick={redirectToNCF}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Empty div to push login and sign up buttons to the right */}
            <div className="ms-auto">
              <Button variant="success" className="me-3 button-navbar">
                Login
              </Button>
              <Button variant="success" className="button-navbar">
                Sign Up
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
