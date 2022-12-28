import Container from '../../components/Container';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import * as Styled from './styles';
import useAuth from '../../context/AuthProvider/useAuth';

export default function Login() {
  const auth = useAuth();

  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          {auth?.token ? (
            <>
              <h1>Usuário logado</h1>
            </>
          ) : (
            <>
              <FormLogin />
              <FormRegister />
            </>
          )}
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
