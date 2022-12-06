import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Login from './index';

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<Login />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});
