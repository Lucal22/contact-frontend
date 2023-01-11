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
      <Container height={'full'}>
        <Styled.Description>
          <h1>Bem vindo (a)!</h1>
          <p>
            Essa é a sua agenda de contatos. Este projeto permite que os
            usuários façam login em sua conta e adicionem, atualizem e excluam
            seus contatos. A funcionalidade de login garante a segurança dos
            dados dos usuários, enquanto a funcionalidade de gerenciamento de
            contatos os ajuda a manter uma lista atualizada e organizada de
            pessoas importantes em suas vidas.
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
