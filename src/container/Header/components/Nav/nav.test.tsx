import { renderTheme } from '../../../../utils/renderTheme';
import Nav from './index';

describe('<Nav />', () => {
  it('should render', () => {
    renderTheme(<Nav />);
  });

  it('should render', () => {
    const nav = renderTheme(<Nav />);
    expect(nav).toMatchSnapshot;
  });
});
