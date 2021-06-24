import React from "react";
import { Container } from "./styles";

const Filter = (props) => {
  return (
    <Container {...props}>
      <option value="">Show all </option>
      <option value="isRetired=true">Show retired schedules</option>
      <option value="isRetired=false">Show unretired schedules</option>
    </Container>
  );
};

export default Filter;
