import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Table from "./components/Table";
import { MyContainer } from "./styles"

const App = () => {
  const [ searchInput, setSearchInput ] = useState({
    searchEmployee: ""
  })

  const handleSearchField = (e) => {
    e.preventDefault();

  }

  return (
    <MyContainer>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3}} >
          <SearchBar searchEmployee>
            
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
