import { useState } from 'react';
import { useQuery } from 'react-query';
import Container from '../../components/Container';
import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import * as Styled from './styles';

export default function Login() {
  const [isSending, setIsSending] = useState(false);

  // const { isLoading, data } = useQuery('products', () => {
  //   return axios.get(`${api}/getProducts`);
  // });
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
