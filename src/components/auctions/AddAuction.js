import { Button, Form, Modal, Alert, Row, Col } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {
/*   const [error, setError] = useState(""); */

  const itemTitle = useRef();
  const itemTitle1 = useRef();
  const itemTitle2 = useRef();
  const itemTitle3 = useRef();
  const origenRef = useRef();
  const distritoRef = useRef();
  const itemDesc = useRef();
  /* const itemImage = useRef(); */
  const myFormRef = useRef();
  

  const { currentUser } = useContext(AuthContext);

/*   const imgTypes = ["image/png", "image/jpeg", "image/jpg"]; */

  const submitForm = async (e) => {
    e.preventDefault();
  /*   setError(""); */

  /*   if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError("Please use a valid image");
    } */

    let currentDate = new Date();
    let dueDate = currentDate.setHours(currentDate.getHours());

    let newAuction = {
      email: currentUser.email,
      tienda: itemTitle.current.value,
      hora: itemTitle1.current.value,
      distrito: distritoRef.current.value,
      origen:origenRef.current.value,
      destino: itemTitle2.current.value,
      pasajeros: itemTitle3.current.value,
      description: itemDesc.current.value,
      duration: dueDate,
     /*  itemImage: itemImage.current.files[0], */
    };

    setAuction(newAuction);
  /*   closeForm(); */

  myFormRef.current.reset()

  };
  let admin = currentUser ? true : false;

  return (
    <>
    
      <form
        onSubmit={submitForm}
        className={admin ? "w-100 border border-top mt-1" : 'd-none' }
        ref={myFormRef}
      >
        <Modal.Body>
        {/*   {error && <Alert variant="danger">{error}</Alert>} */}
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  required
                  ref={itemTitle}
                  placeholder="Tienda"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  required
                  ref={itemTitle1}
                  placeholder="Horario"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" required ref={origenRef} placeholder="Origen"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" required ref={itemTitle2} placeholder="Destino"/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Distrito</Form.Label>
              <Form.Control
                as="Select"
                multiple={false}
                ref={distritoRef}
                className="mb-3"
              >
                <option disabled>Selecciona una Opcion</option>
                <option value="uno">1 Uno</option> 
                <option value="dos">2 Dos</option> 
              </Form.Control>
            </Col>
          </Row> 
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Nombre/Telefono/Direccion</Form.Label>
                <Form.Control as="textarea" type="text" required ref={itemTitle3} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control type="text" required ref={itemDesc} />
              </Form.Group>
            </Col>
          </Row>

          {/*       <Row>
              <Col>
              <Form.Label></Form.Label>
                <Form.Group >
                  <Form.File
                    label="Cargar Foto"
                    custom
                    required
                    ref={itemImage}
                  />
                </Form.Group>
              </Col>
            </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" type="submit" className="w-100">
            Pedir Orden
          </Button>
        </Modal.Footer>
      </form>
    </>
  );
};
