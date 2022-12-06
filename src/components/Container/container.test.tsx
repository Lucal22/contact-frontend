import { renderTheme } from '../../utils/renderTheme';
import Container from './index';

describe('<Container />', () => {
  it('should render with background white', () => {
    const { container } = renderTheme(
      <Container background={'white'} height={'full'}>
        <h1>Olá mundo</h1>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with background gray', () => {
    const { container } = renderTheme(
      <Container background={'gray'} height={'100'}>
        <h1>Olá mundo</h1>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with background gray', () => {
    const { container } = renderTheme(
      <Container height={'100'}>
        <h1>Olá mundo</h1>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });
});
