import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';
import images from '../../assets/index';

export type HomeProps = {
  children: React.ReactNode;
};

export default function Home() {
  return (
    <Styled.Container>
      <Container height={'full'}>
        <h1>Bem vindo (a)!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque
          laborios am consectetur quos voluptatibus de bitis excepturi neque
          distinctio autem ex itaque, explicabo ea quae officia velit amet omnis
          sint sit.
        </p>
        <img src={images.login} />
      </Container>
    </Styled.Container>
  );
}
