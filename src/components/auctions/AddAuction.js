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
              <Form.Label>Tienda:</Form.Label>
              <Form.Control
                as="Select"
                multiple={false}
                ref={itemTitle}
                className="mb-3"
              >
                <option>Selecciona Una Tienda de Distrito 1</option>
                <option value="Altares II-50AUF">Altares II-50AUF</option> 
                <option value="Apolo-50OAP">Apolo-50OAP</option> 
                <option value="Bachoco-50BCC">Bachoco-50BCC</option> 

                <option value="Balderrama-50OBD">Balderrama-50OBD</option> 
                <option value="Banus-509Q1">Banus-509Q1</option> 
                <option value="Basalto-50YFF">Basalto-50YFF</option> 

                <option value="Bosco-50U8C">Bosco-50U8C</option> 
                <option value="Bugambilias-50BUB">Bugambilias-50BUB</option> 
                <option value="BugambiliasII-50BWU">BugambiliasII-50BWU</option> 

                <option value="Canarios-50OTE">Canarios-50OTE</option> 
                <option value="Castanas-50LYW">Castanas-50LYW</option> 
                <option value="Choyal-50GBE">Choyal-50GBE</option> 

                <option value="Colinas-50KLN">Colinas-50KLN</option> 
                <option value="Cordobes-50CDK">Cordobes-50CDK</option> 
                <option value="Cumbres-50HCB">Cumbres-50HCB</option> 

                <option value="Del Cedro-50EIE">Del Cedro-50EIE</option> 
                <option value="Del Sol-50DPU">Del Sol-50DPU</option> 
                <option value="Diego Rivera-50NFC">Diego Rivera-50NFC</option> 

                <option value="DIF-50XIF">DIF-50XIF</option> 
                <option value="Dunas-50DUN">Dunas-50DUN</option> 
                <option value="El Esplendor-50XR6">El Esplendor-50XR6</option> 

                <option value="El Tijerito-500M3">El Tijerito-500M3</option> 
                <option value="El Tronconal-50TWN">El Tronconal-50TWN</option> 
                <option value="El Mezquite-501RM">El Mezquite-501RM</option> 

                <option value="Expo-50EMR">Expo-50EMR</option> 
                <option value="Flamingo-50FEN">Flamingo-50FEN</option> 
                <option value="Gomez Morin-50MSH">Gomez Morin-50MSH</option> 

                <option value="Hacienda-50HOH">Hacienda-50HOH</option> 
                <option value="Himes-50ARS">Himes-50ARS</option> 
                <option value="Isabeles-50ILS">Isabeles-50ILS</option> 

                <option value="Jardines-50JIN">Jardines-50JIN</option> 
                <option value="Jesus Garcia-50IVF">Jesus Garcia-50IVF</option> 
                <option value="Kino II-50YUQ">Kino II-50YUQ</option> 

                <option value="La Coyotita-50CYY">La Coyotita-50CYY</option> 
                <option value="La Floresta-50OWO">La Floresta-50OWO</option> 
                <option value="La Salida-50Q07">La Salida-50Q07</option> 

                <option value="Las Huertas-50EVQ">Las Huertas-50EVQ</option> 
                <option value="Lazaro-501QF">Lazaro-501QF</option> 
                <option value="Libertad-50HLI">Libertad-50HLI</option> 

                <option value="Maxxi-50QAE">Maxxi-50QAE</option> 
                <option value="Mendoza-50MDZ">Mendoza-50MDZ</option> 
                <option value="Montecarlo-50JMC">Montecarlo-50JMC</option> 

                <option value="Morelos-50IHD">Morelos-50IHD</option> 
                <option value="Narvaez-50VEV">Narvaez-50VEV</option> 
                <option value="Novena-50DKV">Novena-50DKV</option> 

                <option value="Nueva Palmira-50S2X">Nueva Palmira-50S2X</option> 
                <option value="Nuevo Hermosillo-50ONH">Nuevo Hermosillo-50ONH</option> 
                <option value="oceguera-507tq">oceguera-507tq</option> 

                <option value="Olivares-50IVA">Olivares-50IVA</option> 
                <option value="Oriente-50OTY">Oriente-50OTY</option> 
                <option value="Papagos-50AL3">Papagos-50AL3</option> 

                <option value="Paseo Real-50N05">Paseo Real-50N05</option> 
                <option value="Perinorte-50QPI">Perinorte-50QPI</option> 
                <option value="Prados del Sol-50HPS">Prados del Sol-50HPS</option> 

                <option value="Progreso-50PGG">Progreso-50PGG</option> 
                <option value="Pueblitos-50EBL">Pueblitos-50EBL</option> 
                <option value="Real del Arco-50RAD">Real del Arco-50RAD</option> 

                <option value="Real del Carmen-50KOW">Real del Carmen-50KOW</option> 
                <option value="Republica-50UMR">Republica-50UMR</option> 
                <option value="Reyes-50HRY">Reyes-50HRY</option> 

                <option value="Rio-50YHZ">Rio-50YHZ</option> 
                <option value="Romanza-50QAJ">Romanza-50QAJ</option> 
                <option value="Sahuaro-50SAH">Sahuaro-50SAH</option> 

                <option value="San Francisco-50SOH">San Francisco-50SOH</option> 
                <option value="Santa Clara-50SKA">Santa Clara-50SKA</option> 
                <option value="Supremo-50XDH">Supremo-50XDH</option> 

                <option value="Topografos-50UWS">Topografos-50UWS</option> 
                <option value="Tops-50WOT">Tops-50WOT</option> 
                <option value="Valencia-50VLY">Valencia-50VLY</option> 

                <option value="Villa Verde-50VNU">Villa Verde-50VNU</option> 
                <option value="Vinedos-50QZZ">Vinedos-50QZZ</option> 
                <option value="Yunke-50hzy">Yunke-50hzy</option> 

              </Form.Control>
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
