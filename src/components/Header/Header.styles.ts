import { themeGet } from '@primer/react';
import styled from 'styled-components';
import { fromTheme } from '../../theme/fromTheme';

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderIconContainer = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 6px;
  fill: ${themeGet(fromTheme.colors.fg.subtle)};
  :hover {
    fill: ${themeGet(fromTheme.colors.fg.default)};
    background-color: ${themeGet(fromTheme.colors.canvas.inset)};
  }
  :active {
    background-color: ${themeGet(fromTheme.colors.neutral.muted)};
  }
`;
