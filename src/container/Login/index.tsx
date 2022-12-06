import Container from '../../components/Container';
import * as Styled from './styles';

export default function Login() {
  return (
    <Styled.Container>
      <Container height={'full'}>
        <Styled.Content>
          <Styled.Login>
            <h1>{'Login'}</h1>
            <Styled.Form>
              <input type={'email'} placeholder={'email@email.com'} />
              <input type={'password'} placeholder={'Digite sua senha'} />
              <Styled.Button>{'Entrar'}</Styled.Button>
            </Styled.Form>
          </Styled.Login>
          <Styled.CreateAccount>
            <h1>{'Criar conta'}</h1>
            <Styled.Form>
              <input type={'text'} placeholder={'nome'} />
              <input type={'email'} placeholder={'email@email.com'} />
              <input type={'password'} placeholder={'Digite sua senha'} />
              <Styled.Button>{'Criar'}</Styled.Button>
            </Styled.Form>
          </Styled.CreateAccount>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}
