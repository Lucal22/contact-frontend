import { ReactNode } from 'react';
import Container from '.';
import { ContainerStyleProps } from './styles';

export default {
  title: 'Container',
  component: Container,
  args: {
    children: 'Olá mundo',
    background: 'gray',
    height: 'full',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (
  args: JSX.IntrinsicAttributes & ContainerStyleProps & { children: ReactNode },
) => <Container {...args} />;
