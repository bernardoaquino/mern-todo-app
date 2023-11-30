import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './index';

import renderWithTheme from 'localUtils/renderWithTheme';

const mock = {
  title: 'Mock Title',
};

describe('Modal', () => {
  it('Não deve renderizar conteúdo por padrão', () => {
    render(<Modal />);

    const modal = screen.queryByTestId('Modal');

    expect(modal).toBeNull();
  })

  it('Deve renderizar conteúdo quando open estiver presente nas props', () => {
    render(<Modal open />);

    const modal = screen.getByTestId('Modal');

    expect(modal).toBeInTheDocument();
  })

  it('Deve renderizar titulo de acordo com props', () => {
    render(<Modal open title={mock.title} />);

    const modal = screen.getByTestId('Modal');

    const hasTitle = modal.innerHTML.includes(mock.title);

    expect(hasTitle).toBeTruthy();
  })

  it('Deve chamar callback onClose ao clicar para fechar a modal', async () => {
    const mockOnClose = jest.fn();
    const user = userEvent.setup();

    render(<Modal open onClose={mockOnClose} />);

    const modalClose = screen.getByTestId('Modal-close');

    await user.click(modalClose);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  })

  it('Deve chamar callback onClose ao clicar no overlay da modal', async () => {
    const mockOnClose = jest.fn();
    const user = userEvent.setup();

    render(<Modal open onClose={mockOnClose} />);

    const modalOverlay = screen.getByTestId('Modal-overlay');

    await user.click(modalOverlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  })
})