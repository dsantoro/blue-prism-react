import React from "react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  SkelIcon,
  SkelTitle,
  SkelBody,
  SkelDate,
  SkelButton,
  SkelContainer
} from "./styles";

const SkeletonCard = React.memo(() => {
  return (
    <SkelContainer>
      <CardHeader>
        <SkelIcon />
        <SkelTitle />
      </CardHeader>
      <CardBody>
        <SkelBody />
      </CardBody>
      <CardFooter>
        <div>
          <SkelDate />
        </div>
        <object>
          <SkelButton />
        </object>
      </CardFooter>
    </SkelContainer>
  );
});

export default SkeletonCard;
