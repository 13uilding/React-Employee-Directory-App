import React from "react";
// import { MyJumbotron } from "../styles";

const Row = props => {
  return (
    <tr key={props.key}>
      <th scope="row" name="index">{props.index}</th>
      <td name="image">
        <img src={props.image} alt="employee" />
      </td>
      <td name="name">{props.name}</td>
      <td name="cell">{props.cell}</td>
      <td name="email">{props.email}</td>
      <td name="dob">{props.dob}</td>
    </tr>
  );
};

export default Row;


