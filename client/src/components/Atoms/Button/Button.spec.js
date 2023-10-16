import { render, screen } from '@testing-library/react';

import Button from './index';

const mock = {
    text: 'Test text',
    icon: ({ width, height }) => <p>{width} {height}</p>
};

describe('Button', () => {
  it('Deve renderizar', () => {
    render(<Button>{mock.text}</Button>);

    const button = screen.getByTestId('Button');

    expect(button).toBeInTheDocument();
  })

  it("Deve renderizar com cor 'primary' por padrão", () => {
    render(<Button>{mock.text}</Button>);

    const button = screen.getByTestId('Button');

    const color = button.getAttribute('color');

    expect(color).toBe('primary');
  })

  it("Deve renderizar com cor de acordo com props", () => {
    render(<Button color={'secondary'}>{mock.text}</Button>);

    const button = screen.getByTestId('Button');

    const color = button.getAttribute('color');

    expect(color).toBe('secondary');
  })

  it('Deve renderizar icone passado com props', () => {
    render(<Button icon={mock.icon}>{mock.text}</Button>);

    const icon = screen.getByTestId('Icon');

    expect(icon).toBeInTheDocument();
  })
})