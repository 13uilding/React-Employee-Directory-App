import React from 'react';
import { Table } from 'reactstrap';
import employees from "../dummyEmployeeData.json";
import Row from "./table/Row";

// const image = [0].picture.thumbnail
// const firstName = [0].name.first
// const lastName = [0].name.last
// const cell = [0].cell 
// const email = [0].email
// const login = [0].username
// const dob = [0].dob

const MyTable = (props) => {
  return (
    <Table dark striped>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Image</th>
          <th>Name</th>
          <th>Cell</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          let index = employees.indexOf(employee);
          let image = employee.picture.thumbnail;
          let name = employee.firstName + employee.lastName;
          let { cell, email, dob } = employee;
          <Row 
            index={index}
            image={} 
            name={}
            cell={}
            email={}
            dob={} 
          >

          </Row>
        })}
      </tbody>
    </Table>
  );
}

export default MyTable;

/*
index
image
name
cell
email
dob
*/