import { screen } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { renderTheme } from '../../../../utils/renderTheme';
import Input from './index';

describe('<Input />', () => {
  it('should render', () => {
    renderTheme(
      <Input
        name={'name'}
        type={'text'}
        placeholder={'nome'}
        value={''}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});
