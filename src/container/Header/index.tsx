import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import useAuth from '../../context/AuthProvider/useAuth';

import * as Styled from './styles';

export default function Header() {
  const auth = useAuth();
  const navigate = useNavigate();

  function logout() {
    auth?.logout();
    navigate('/');
  }

  return (
    <Styled.Header>
      <Container height={'100'}>
        <Styled.Logo>
          <h1>AGENDA</h1>
          {auth?.token ? (
            <Styled.Logout onClick={logout}>SAIR</Styled.Logout>
          ) : null}
        </Styled.Logo>
      </Container>
    </Styled.Header>
  );
}
