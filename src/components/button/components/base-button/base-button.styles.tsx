import React from 'react';
import styled from 'styled-components';

import { Loader } from '../../../../icons';
import { Spacing } from '../../../../theme';

export const StyledOverlay = styled(({ className }: { className?: string }) => (
  <div className={className}>
    <Loader width="20" height="20" />
  </div>
))`
  border-radius: ${Spacing.XXS};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled.div`
  margin-right: 10px;
  font-size: 0;
`;
