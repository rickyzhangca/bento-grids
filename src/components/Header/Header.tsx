import { Logo } from '../Logo/Logo';
import {
  Container,
  LeftContainer,
  LogoContainer,
  RightContainer,
} from './Header.styles';
import { HeaderAboutButton } from './HeaderAboutButton';
import { HeaderGitHubButton } from './HeaderGitHubButton';

export const Header = () => {
  return (
    <Container>
      <LeftContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </LeftContainer>
      <RightContainer>
        <HeaderGitHubButton />
        <HeaderAboutButton />
      </RightContainer>
    </Container>
  );
};
