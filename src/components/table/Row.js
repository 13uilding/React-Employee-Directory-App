import React from "react";
// import { MyJumbotron } from "../styles";

const Row = props => {
  return (
    <tr key={props.key}>
        <th></th>
      <th scope="row" name="index">{props.index}</th>
      <td name="image">
        <img src={props.index} alt="employee" />
      </td>
      <td name="name">{props.fullName}</td>
      <td name="cell">{props.cell}</td>
      <td name="email">{props.email}</td>
      <td name="dob">{props.dob}</td>
    </tr>
  );
};

export default Row;


