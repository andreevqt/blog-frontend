import styled from 'styled-components';

import { TListProps } from './types';

export const StyledList = styled.nav<TListProps>`
  display: flex;
  ${({ right }) => right && 'margin-left:auto;'}
  ${({ left }) => left && 'margin-right:auto;'}
  ${({ center }) => center && 'margin: 0 auto;'}
`;
