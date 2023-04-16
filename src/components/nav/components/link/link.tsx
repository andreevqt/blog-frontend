import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Text } from '../../../text';

import { StyledLink } from './link.styles';
import { TNavLinkProps } from './types';

export const Link: React.FC<TNavLinkProps> = ({ to, ignoreActive = false, children, size, ...rest }) => {
  const match = useRouteMatch({ path: to as string, exact: true });
  return (
    <StyledLink to={to} {...(!ignoreActive && { $active: !!match })} {...rest}>
      <Text size={size}>{children}</Text>
    </StyledLink>
  );
};
