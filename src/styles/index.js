import styled from "styled-components";
import { Form, Container, Jumbotron } from "reactstrap";

const white = "#000000"

export const FormWrapper = styled(Form)`
    #searchEmployeeInput {
        width: 350px;
        margin-right: 5px;
    }
`

export const MyContainer = styled(Container)`
    text-align: center;
`

export const MyHeader = styled(Jumbotron)`
    text-align: center;
    color: ${white};
    padding: 20px 100%;
    margin: 20px 0px;
`