import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../container';
import { Spacing } from '../../theme/theme';

export const BaseHeader = styled.div`
  background-color: ${({ theme }) => theme.background.lightest};
  padding: ${Spacing.M};
  & > ${Container} {
    display: flex;
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  font-size: 0;
`;
