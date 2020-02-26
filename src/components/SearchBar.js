import React from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import { FormWrapper } from "../styles"

const Search = (props) => {
  console.log(`SearchBar Props: ${props}`);
  return (
    <FormWrapper inline onSubmit={(e) => props.handleSubmit(e)}>
      <FormGroup>
        <Input type="text" name="searchEmployee" id="searchEmployeeInput" placeholder="Employee Search" />
        <Button outline color="primary" primary>Search</Button>
      </FormGroup>
    </FormWrapper>
  )
}

export default Search