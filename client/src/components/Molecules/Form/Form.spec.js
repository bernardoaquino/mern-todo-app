import { render, screen } from '@testing-library/react';

import Form from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

const mock = {
  fields: [
    {
      type: 'text',
      label: 'Mock',
      name: 'mock',
      required: true,
      value: ''
    },
  ],
  onSubmit: jest.fn()
};

describe('Form', () => {
  it('Deve renderizar', () => {
    renderWithTheme(<Form fields={mock.fields} onSubmit={mock.onSubmit} />);

    const form = screen.getByTestId('Form');

    expect(form).toBeInTheDocument();
  })
})