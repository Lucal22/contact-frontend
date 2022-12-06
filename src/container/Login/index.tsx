import { useState } from 'react';
import Container from '../../components/Container';
import Input from './components/Input';
import { api } from '../../lib/api';
import * as Styled from './styles';

export default function Login() {
  const [isSending, setIsSending] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const [formCreate, setFormCreate] = useState({
    email: '',
    password: '',
  });

  async function loginChanges(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormLogin((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function createChanges(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormCreate((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function submitEmail(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.preventDefault();
    setIsSending(true);
    await api.post('/accounts', {
      email: formCreate.email,
      password: formCreate.password,
    });
    setIsSending(false);
  }

  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          <Styled.Login>
            <h1>{'Login'}</h1>
            <Styled.Form>
              <Input
                name={'email'}
                type={'email'}
                value={formLogin.email}
                placeholder={'email@email.com'}
                onChange={loginChanges}
              />
              <Input
                name={'password'}
                type={'password'}
                value={formLogin.password}
                placeholder={'senha'}
                onChange={loginChanges}
              />
              <Styled.Button>{'ENTRAR'}</Styled.Button>
            </Styled.Form>
          </Styled.Login>
          <Styled.CreateAccount>
            <h1>{'Criar conta'}</h1>
            <Styled.Form>
              <Input
                name={'email'}
                type={'email'}
                value={formCreate.email}
                placeholder={'email@email.com'}
                onChange={createChanges}
              />
              <Input
                name={'password'}
                type={'password'}
                value={formCreate.password}
                placeholder={'senha'}
                onChange={createChanges}
              />
              <Styled.Button onClick={submitEmail} disabled={isSending}>
                {'CRIAR CONTA'}
              </Styled.Button>
            </Styled.Form>
          </Styled.CreateAccount>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
