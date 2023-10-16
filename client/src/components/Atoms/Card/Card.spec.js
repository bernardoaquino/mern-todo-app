import { render, screen } from '@testing-library/react';

import Card from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

const mock = {
    text: 'Test text',
    icon: ({ width, height }) => <p>{width} {height}</p>
};

describe('Card', () => {
  it('Deve renderizar', () => {
    render(<Card>{mock.text}</Card>);

    const card = screen.getByTestId('Card');

    expect(card).toBeInTheDocument();
  })

  it("Deve renderizar com padding de 12px vertical e 16px horizontal por padrão", () => {
    renderWithTheme(<Card>{mock.text}</Card>);

    const card = screen.getByTestId('Card');

    const style = window.getComputedStyle(card);

    expect(style.padding).toBe('12px 16px');
  })

  it("Deve renderizar com fundo transparente de acordo com props", () => {
    render(<Card transparent>{mock.text}</Card>);

    const card = screen.getByTestId('Card');

    const style = window.getComputedStyle(card);

    expect(style.backgroundColor).toBe('transparent');
  })

  it("Deve chamar a função onClick ao ser clicado", () => {
    const mockOnClick = jest.fn()

    render(<Card onClick={mockOnClick}>{mock.text}</Card>);

    const card = screen.getByTestId('Card');

    card.click();

    expect(mockOnClick).toHaveBeenCalled();
  })
})