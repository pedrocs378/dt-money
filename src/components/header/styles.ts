import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  font-weight: bold;
  background-color: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors.white};

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['green-700']};
  }
`
