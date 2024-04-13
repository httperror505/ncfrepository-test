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
                    label="Research Title"
                >
                    {/* Document Name */}
                        <Form.Control type="title" placeholder="Title of the Research Paper"/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingName"
                    label="Author Name"
                    className="mb-3"
                >
                    {/* Author */}
                    <Form.Group className="mb-3">
                        <Form.Control type="name"  placeholder="John Doe"/>
                    </Form.Group>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingDate"
                    label="Published Date"
                    className="mb-3"
                >
                    {/* Publish Date */}
                    <Form.Group className="mb-3">
                        <Form.Control type="date"  placeholder="yyyy-mm-dd"/>
                    </Form.Group>
                </FloatingLabel>


                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Abstract of the Paper"
                    className="mb-3"
                >
                    {/* Abstract */}
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" rows={3}  placeholder="A brief overview of the research paper."/>
                    </Form.Group>                  
                </FloatingLabel>

                <FloatingLabel
                    className="mb-3" 
                    controlId="floatingTextarea2"
                    label="Citation Format"
                >
                    {/* Citation */}
                        <Form.Control as="textarea" type="abstract"  placeholder="APA Citation"/>
                </FloatingLabel>

            </Container>
            
        </section>

    )

}
