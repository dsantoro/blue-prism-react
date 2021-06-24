import React from "react";
import { format } from "date-fns";
import { GrSchedules } from "react-icons/gr";
import { useSanitizer } from "../../utils/useSanitizer";
import { Container, CardHeader, CardBody, CardFooter } from "./styles";

import Button from "../Button";

const Card = React.memo(
  ({
    name,
    description,
    isRetired,
    startDate,
    endDate,
    onClick,
    onButtonClick
  }) => {
    return (
      <Container onClick={onClick}>
        <CardHeader>
          <span>
            <GrSchedules />
          </span>
          <h3>{useSanitizer(name)}</h3>
        </CardHeader>
        <CardBody>
          <p>{description}</p>
        </CardBody>
        <CardFooter>
          <div>
            <span>Start: {format(new Date(startDate), "MM/dd/yyyy")}</span>
            <span>End: {format(new Date(endDate), "MM/dd/yyyy")}</span>
          </div>
          <object>
            <Button loading={false} onClick={onButtonClick}>
              <span>{isRetired ? "Undo retire" : "retired"}</span>
            </Button>
          </object>
        </CardFooter>
      </Container>
    );
  }
);

export default Card;
