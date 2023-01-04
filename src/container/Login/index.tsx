import Container from '../../components/Container';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import * as Styled from './styles';
import useAuth from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.token) {
      navigate('/login/contacts');
    }
  }, [auth?.token, navigate]);

  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          <FormLogin />
          <FormRegister />
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
