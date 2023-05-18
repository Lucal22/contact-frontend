import Container from '../../components/Container';
import useAuth from '../../context/AuthProvider/useAuth';

import * as Styled from './styles';

export default function Header() {
  const auth = useAuth();

  function logout() {
    auth?.logout();
  }

  return (
    <Styled.Header>
      <Container height={'100'}>
        <Styled.Logo>
          <h1>CONTACTS</h1>
          {auth?.token ? (
            <Styled.Logout onClick={logout}>
              <a href="/">LOGOUT</a>
            </Styled.Logout>
          ) : null}
        </Styled.Logo>
      </Container>
    </Styled.Header>
  );
}
