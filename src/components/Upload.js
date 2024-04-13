import Container from "react-bootstrap/Container";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Categories () {

    return (

        <section id="categories" className="block categories-block">
            <Container fluid className="categories-container">
                <div className="title-bar">
                    <h1 className="title">Upload</h1>
                </div>
            </Container>

            <Container>

                {/* <FloatingLabel
                    className="mb-3" 
                    controlId="exampleForm.ControlInput1"
                    label="Email address"
                >
                    {/* Document Name */}
                        <Form.Label>Document Name</Form.Label>
                        <Form.Control type="title" placeholder="Title of the Document" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    {/* Author */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author Name</Form.Label>
                        <Form.Control type="name" placeholder="John Doe" />
                    </Form.Group>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    {/* Publish Date */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Published Date</Form.Label>
                        <Form.Control type="date" placeholder="Title of the Document" />
                    </Form.Group>
                </FloatingLabel>


                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    {/* Abstract */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Abstract of the Document"/>
                    </Form.Group>                  
                </FloatingLabel>

                <FloatingLabel
                    className="mb-3" 
                    controlId="exampleForm.ControlInput1"
                >
                    {/* Citation */}
                        <Form.Label>Citation</Form.Label>
                        <Form.Control type="abstract" placeholder="Citation of the Document" />
                </FloatingLabel> */}

            </Container>
            
        </section>

    )

}