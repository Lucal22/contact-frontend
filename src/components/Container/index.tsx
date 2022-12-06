import * as Styled from './styles';
import { ContainerStyleProps } from './styles';

export type ContainerProps = ContainerStyleProps & {
  children: React.ReactNode;
};

export default function Container({
  children,
  background,
  height,
}: ContainerProps) {
  return (
    <Styled.Container height={height} background={background}>
      {children}
    </Styled.Container>
  );
}
