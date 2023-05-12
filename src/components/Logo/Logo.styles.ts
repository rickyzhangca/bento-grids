import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const StyledSVG = styled.svg`
  fill: ${themeGet(fromTheme.colors.fg.default)};
  cursor: pointer;
`;
