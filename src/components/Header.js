import React from "react";
import { Jumbotron } from "reactstrap";
import { MyJumbotron } from "../styles";

const Header = (props) => {
    console.log(`Header Props: ${props}`)
    return (
        <MyJumbotron>
            <h1>Employee Destroyer</h1>
            <h3>Seach the employee database by table header or search field.</h3>
        </MyJumbotron>
    )
}

export default Header;