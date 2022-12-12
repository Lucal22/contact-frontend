import Container from '../../components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Nav from './components/Nav';

import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Header>
      <Container height={'100'}>
        <Logo />
        <Nav />
        <Menu />
      </Container>
    </Styled.Header>
  );
}
