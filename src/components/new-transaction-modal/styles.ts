import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus {
    box-shadow: none;
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme.colors['gray-900']};
      color: ${({ theme }) => theme.colors['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background-color: ${({ theme }) => theme.colors['green-500']};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background-color: transparent;
  border: 0;
  font-size: 0;

  color: ${({ theme }) => theme.colors['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  color: ${({ theme }) => theme.colors['gray-300']};
  padding: 1rem;
  border-radius: 6px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: all 0.2s ease-in-out;

  svg {
    color: ${({ variant, theme }) => variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme.colors['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ variant, theme }) => variant === 'income' ? theme.colors['green-500'] : theme.colors['red-700']};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
