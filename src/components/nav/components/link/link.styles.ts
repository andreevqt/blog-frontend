import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

import { Spacing } from '../../../../theme';

type TNavLinkStyledProps = {
  $active?: boolean;
};

export const StyledLink = styled(BaseLink)<TNavLinkStyledProps>`
  font-weight: 500;
  line-height: 1;
  padding: 0 ${Spacing.XS};
  ${({ $active, theme }) => $active && `color: ${theme.primary.base};`}
`;
