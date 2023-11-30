import { render, screen } from '@testing-library/react';
import 'jest-styled-components'

import List from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

type RenderProps = {
  text: string
}

const mock = {
  list: [
    { text: 'A' },
    { text: 'B' },
    { text: 'C' },
    { text: 'D' },
  ],
  render: ({ text }: RenderProps) => <p>{text}</p>,
  columns: 2,
  keyPrefix: 'mockPrefix',
};

describe('List', () => {
  it('Deve dar true', () => {
    expect(true).toBe(true)
  })

  it('Deve renderizar', () => {
    render(<List items={mock.list} render={jest.fn()} />);

    const list = screen.getByTestId('List');

    expect(list).toBeInTheDocument();
  })

  it('Deve renderizar o número correto de itens', () => {
    renderWithTheme(<List items={mock.list} render={jest.fn()} />)

    const list = screen.getByTestId('List');

    expect(list.children.length).toBe(mock.list.length);
  })

  it('Deve renderizar o número correto de colunas se presente', () => {
    renderWithTheme(<List columns={mock.columns} items={mock.list} render={jest.fn()} />)

    const list = screen.getByTestId('List');

    expect(list).toHaveStyleRule('grid-template-columns', `repeat(${mock.columns}, 1fr)`)
  })

  it('Deve renderizar a quantidade de itens correta com a função passada por props', () => {
    const mockFunction = jest.fn();
    renderWithTheme(<List items={mock.list} render={mockFunction} />)

    expect(mockFunction).toHaveBeenCalledTimes(4);
  })
})