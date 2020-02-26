import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Table from "./components/Table";
import { MyContainer } from "./styles"
import { results as initialEmployees } from "./dummyEmployeeData.json";


const App = () => {
  const [ data, setData ] = useState({
    employees: initialEmployees
  })
  const { employees } = data

  const handleChange = (e) => {
    e.preventDefault();
    const searchInput = e.target.value.toLowerCase();
    let newemployees = [];
    if ( searchInput !== "") {
      newemployees = initialEmployees.filter(employee => {
        return (
          searchInput === employee.name.first.toLowerCase().slice(0, searchInput.length) || 
          searchInput === employee.name.last.toLowerCase().slice(0, searchInput.length))})
    } else {
      newemployees = initialEmployees;
    }
    setData({ employees: newemployees })
  }

  const handleOnClick = () => {

    setData({ employees: employees.sort(sortByName)})
  }

  function sortByName( a, b ) {
    const nameA = a.name.first.toLowerCase();
    const nameB = b.name.first.toLowerCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison
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
          <SearchBar handleChange={handleChange}>
            
          </SearchBar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table employees={employees} onClick={handleOnClick}></Table>
        </Col>
      </Row>
    </MyContainer>
  );
}

export default App;
