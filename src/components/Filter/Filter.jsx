import React from "react";
import PropTypes from "prop-types";
import { Input, Title } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Title>Find contacts by name</Title>
      <Input value={value} onChange={onChange} placeholder="Type to search" />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
