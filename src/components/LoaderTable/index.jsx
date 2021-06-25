import React from 'react';

import { Container, Image } from './styles';

import Prism from '../../assets/prism.svg';

const LoaderTable = () => {
  return (
    <Container>
      <Image src={Prism} />
      <h2>Loading...</h2>
    </Container>
  );
}

export default LoaderTable;