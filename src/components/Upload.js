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

                <FloatingLabel
                    className="mb-3" 
                    controlId="exampleForm.ControlInput1"
                    label="Title of the Document"
                >
                    {/* Document Name */}
                        // <Form.Label>Document Name</Form.Label>
                        <Form.Control type="title"/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Author Name"
                    className="mb-3"
                >
                    {/* Author */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        // <Form.Label>Author Name</Form.Label>
                        <Form.Control type="name"/>
                    </Form.Group>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Published Date"
                    className="mb-3"
                >
                    {/* Publish Date */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        // <Form.Label>Published Date</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </FloatingLabel>


                <FloatingLabel
                    controlId="floatingInput"
                    label="Abstract of the Paper"
                    className="mb-3"
                >
                    {/* Abstract */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        // <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>                  
                </FloatingLabel>

                <FloatingLabel
                    className="mb-3" 
                    controlId="exampleForm.ControlInput1"
                    label="Citation Format"
                >
                    {/* Citation */}
                        // <Form.Label>Citation</Form.Label>
                        <Form.Control type="abstract"/>
                </FloatingLabel>

            </Container>
            
        </section>

    )

}
