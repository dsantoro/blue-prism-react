import React from "react";
import { CardButton, Spinner } from "./styles";

const Button = ({ children, loading, onClick }) => {
  return (
    <CardButton onClick={onClick}>
      {loading ? <Spinner /> : children}
    </CardButton>
  );
};

export default Button;
