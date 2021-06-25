import React from 'react';

import { Container, Image } from './styles';

import Prism from '../../assets/prism.svg';


const NoData = () => {
  return (
    <Container>
      <Image src={Prism} />
      <h2>No data to show... yet!</h2>
    </Container>
  )
}

export default NoData;