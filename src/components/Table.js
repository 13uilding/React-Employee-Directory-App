import React from 'react';
import { Table } from 'reactstrap';

// const image = [0].picture.thumbnail
// const firstName = [0].name.first
// const lastName = [0].name.last
// const cell = [0].cell 
// const email = [0].email
// const login = [0].username
// const dob = [0].dob

const Table = (props) => {
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
        <tr>
          <th scope="row">1</th>
          <td name="image"><img src="file"/></td>
          <td name="name">Mark Otto</td>
          <td name="cell">901-444-5682</td>
          <td name="email">quan@mdo.com</td>
          <td name="dob">03031992</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Table;


// Table.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     size: PropTypes.string,
//     bordered: PropTypes.bool,
//     borderless: PropTypes.bool,
//     striped: PropTypes.bool,
//     dark: PropTypes.bool,
//     hover: PropTypes.bool,
//     responsive: PropTypes.bool,
//     // Custom ref handler that will be assigned to the "ref" of the inner <table> element
//     innerRef: PropTypes.oneOfType([
//       PropTypes.func,
//       PropTypes.string,
//       PropTypes.object
//     ])
//     };