import { fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import { theme } from '../../../../styles/theme';
import { renderTheme } from '../../../../utils/renderTheme';
import Menu from './index';

describe('<Menu />', () => {
  it('should render', () => {
    const menu = renderTheme(<Menu />);
    expect(menu).toMatchSnapshot;
  });

  it('should render Button', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('Abre/Fecha Menu');
    expect(button).toHaveStyleRule('display', 'flex');
    expect(button).toHaveStyleRule('display', 'none', {
      media: `(min-width:${theme.screen.size.medium})`,
    });
  });

  it('should open and close Menu', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('Abre/Fecha Menu');
    const list = screen.getByLabelText('Abre Menu');
    expect(list).toBeInTheDocument;
    const menuContent = button.nextSibling;
    fireEvent.click(list);
    expect(menuContent).toHaveStyleRule('display', 'block');
    const X = screen.getByLabelText('Fecha Menu');
    fireEvent.click(X);
    expect(menuContent).toHaveStyleRule('display', 'none');
  });
});
