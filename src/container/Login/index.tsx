import Container from '../../components/Container';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import * as Styled from './styles';
import useAuth from '../../context/AuthProvider/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.token && location.pathname) {
      navigate('/login/contacts');
    }
  }, [auth?.token, navigate, location.pathname]);

  return (
    <Styled.Container>
      <Container height={'100'}>
        <Styled.Description>
          <h1>Welcome!</h1>
          <p>
            This is your contact notebook. This app allows the user to create an
            account and login to save the contact of your beloved friends. The
            user is also capable of changing informations of contacts and delete
            them.
          </p>
        </Styled.Description>
        <Styled.Content>
          <FormLogin />
          <FormRegister />
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
