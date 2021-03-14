import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

const App = () => {

//   hideRandomChar = () => {
//     console.log("Hide random");
//   };

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg="5">
            <RandomChar />
            <button onClick={console.log("Hide random")}>Click</button>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <ItemList />
          </Col>
          <Col md="6">
            <CharDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
