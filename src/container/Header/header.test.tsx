import { renderTheme } from '../../utils/renderTheme';
import Header from './index';

describe('<Header />', () => {
  it('should render', () => {
    const header = renderTheme(<Header />);
    expect(header).toMatchSnapshot;
  });
});
