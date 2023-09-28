import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

const mock = {
  options: [
    {
      value: '1',
      label: 'Mock 1'
    },
    {
      value: '2',
      label: 'Mock 2'
    },
    {
      value: '3',
      label: 'Mock 3'
    }
  ],
  onChange: jest.fn()
};

describe('Select', () => {
  it('Deve renderizar', () => {
    renderWithTheme(<Select {...mock} />);

    const select = screen.getByTestId('Select');

    expect(select).toBeInTheDocument();
  })

  it('Deve renderizar a quantidade correta de opções', () => {
    renderWithTheme(<Select {...mock} />);

    const selectOptions = screen.getByTestId('Select-options');

    expect(selectOptions.children.length).toBe(mock.options.length + 1);
  })

  it('Deve chamar a callback onChange ao selecionar uma opção', () => {
    const user = userEvent.setup();
    
    renderWithTheme(<Select {...mock} />);


    const selectOptions = screen.getByTestId('Select-options');

    user.click(selectOptions.children[1]);

    expect(mock.onChange).toHaveBeenCalled();
  })
})