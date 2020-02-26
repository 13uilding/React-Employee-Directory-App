import React from 'react';
import { Table } from 'reactstrap';
// import { results as employees } from "../dummyEmployeeData.json";
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
          <th></th>
          <th>Image</th>
          <th onClick={props.onClick} style={{cursor: "pointer"}}>Name</th>
          <th>Cell</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
            <Row 
              key={employee.login.uuid}
              image={employee.picture.thumbnail} 
              name={employee.name.first + " " + employee.name.last}
              cell={employee.cell}
              email={employee.email}
              dob={employee.dob.date.slice(0,10)} 
            ></Row>
        ))}
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