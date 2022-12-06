import Container from '../../components/Container';
import * as Styled from './styles';

export default function HomePage() {
  return (
    <Styled.Container>
      <Container height={'full'}>
        <h1>{'Olá mundo'}</h1>
      </Container>
    </Styled.Container>
  );
}
