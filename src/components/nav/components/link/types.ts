import { LinkProps } from 'react-router-dom';

import { TTextSize } from '../../../text/types';

export type TNavLinkProps = LinkProps & {
  ignoreActive?: boolean;
  size?: TTextSize;
};
