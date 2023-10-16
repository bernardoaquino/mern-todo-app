import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

const mock = {
  name: 'mock',
  label: 'Mock label',
  onChange: jest.fn()
};

describe('Checkbox', () => {
  it('Deve renderizar', () => {
    renderWithTheme(<Checkbox />);

    const checkbox = screen.getByTestId('Checkbox');

    expect(checkbox).toBeInTheDocument();
  })

  it('Deve renderizar checkbox já marcada a partir de props', () => {
    renderWithTheme(<Checkbox value={true} {...mock} />);
    
    const checkbox = screen.getByTestId('Checkbox-input');

    const isChecked = checkbox.getAttributeNames().includes('checked');

    expect(isChecked).toBeTruthy();
  })

  it('Deve chamar a callback onChange ao clicar no texto', async () => {
    const user = userEvent.setup();

    renderWithTheme(<Checkbox {...mock} />);

    const checkboxLabel = screen.getByTestId('Checkbox-label');

    await user.click(checkboxLabel);

    expect(mock.onChange).toHaveBeenCalledTimes(1);
  })

  it('Deve chamar a callback onChange ao clicar o icone', async () => {
    const user = userEvent.setup();

    renderWithTheme(<Checkbox {...mock} />);

    const checkboxLabel = screen.getByTestId('Checkbox-container');

    await user.click(checkboxLabel);

    expect(mock.onChange).toHaveBeenCalledTimes(2);
  })
})