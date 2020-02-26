import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { FormWrapper } from "../styles"

const Search = (props) => {
  console.log(`SearchBar Props: ${props}`);
  return (
    <FormWrapper inline >
      <FormGroup>
        <Input type="text" name="searchEmployee" id="searchEmployeeInput" 
        placeholder="Enter the employee's first or last name" 
        onChange={(e) => props.handleChange(e)}
        />
      </FormGroup>
    </FormWrapper>
  )
}

export default Search