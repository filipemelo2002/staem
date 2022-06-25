import React from 'react';

import { Container } from './styles';
import {ReactComponent as Install} from '../../assets/install.svg';

const Header = () => {
  return (
    <Container>
      <h1>Staem</h1>
      <button>
        <Install />
        Install
      </button>
    </Container>
  );
}

export default Header;