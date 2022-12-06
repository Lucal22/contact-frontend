import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Home from './index';

describe('<Home />', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});
