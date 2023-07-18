import React, { useEffect, useState } from 'react'
import { TextInput } from '../TextInput/TextInput';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export const Header = () => {

    const [ searchInfo, setSearchInfo ] = useState("");
    // const [token, setToken] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if(searchInfo !== ""){
            console.log("Ahora la busqueda vale ... ", searchInfo);
        }
    }, [searchInfo])

  return (
    <>
        <Container fluid>
      <Row className="justify-content-center py-5 bg-info">
        <Col
          className="d-flex justify-content-center"
          xs={10}
          md={4}
          xl={4}
        ></Col>
        <Col className="d-flex justify-content-center" xs={10} md={4} xl={4}>
          <TextInput
            name="search"
            type="text"
            placeholder="search a character..."
            state = {setSearchInfo}
          />
        </Col>
        <Col
          className="d-flex justify-content-end align-items-end"
          xs={10}
          md={4}
          xl={4}
        >
          <Row>
            
            {/* Diseño condicional en React bootstrap */}

            {/* {token === "" ? ( */}
              <>
                <Col className="linkDesign" onClick={()=>navigate("/")}>Peliculas</Col>
                <Col className="linkDesign" onClick={()=>navigate("/Series")}>Series</Col>
                <Col className="linkDesign" onClick={()=>navigate("/Top20Peliculas")}>Top20</Col>
              </>
            {/* ) : (
              <>
                <Col>Name</Col>
                <Col>Log out</Col>
              </>
            )} */}
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}
