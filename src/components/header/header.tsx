import React from 'react';

import { Container } from '../container';
import { Logo } from '../../icons';

import { BaseHeader, LogoContainer } from './header.styles';

export const Header: React.FC = () => (
  <BaseHeader>
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
    </Container>
  </BaseHeader>
);
