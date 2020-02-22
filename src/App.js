import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Table from "./components/Table";
import { MyContainer } from "./styles"

const App = () => {
  // const [ data, setData ] = useState({
  //   search: ""
  // })
  return (
    <MyContainer>
      <Row>
        <Col>
          <Header>
            BleepBloop
          </Header>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3}} >
          <SearchBar>
            
          </SearchBar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table></Table>
        </Col>
      </Row>
    </MyContainer>
  );
}

export default App;
