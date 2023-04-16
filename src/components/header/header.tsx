import React from 'react';

import { Container } from '../container';
import { Logo } from '../../icons';
import { Nav } from '../nav';
import { Button } from '../button';

import { BaseHeader, LogoContainer } from './header.styles';

export const Header: React.FC = () => (
  <BaseHeader>
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Nav.List right>
        <Button className="mr-xs" to="/login">
          Войти
        </Button>
        <Button variant="secondary" to="/register">
          Регистрация
        </Button>
      </Nav.List>
    </Container>
  </BaseHeader>
);
