import React from 'react';

import { StyledText } from './text.styles';
import { TTextProps } from './types';

export const Text: React.FC<TTextProps> = ({ children, ...rest }) => <StyledText {...rest}>{children}</StyledText>;
